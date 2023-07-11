// base
import 'dotenv/config'
import { ethers } from "ethers";
import ccxt from 'ccxt';

// console
import { screen, pricesList, pendingOrderList, historyOrderList } from "./console"

// utils
import { to } from 'await-to-js';
import { formatUnits, parseUnits } from "ethers/lib/utils";

// contract type
import { MakeOrderAbi__factory } from "../contracts_types/factories/MakeOrder.sol/MakeOrderAbi__factory";
import { ERC20Abi__factory } from '../contracts_types';

// constants
const walletKey = process.env.EXCHANGE_KEY || '';
const rpcUrl = process.env.RPC_URL || '';
const websocketRpcUrl = process.env.WEBSOCKET_RPC_URL || '';

const mUSDCAddr = process.env.mUSDC_ADDR || '';
const mWethAddr = process.env.mWETH_ADDR || '';
const makerOrderAddr = process.env.MAKE_ORDER_CONTRACT_ADDRESS || '';

enum OrderType {
    Buy,
    Sell
}

interface Order {
    id: string;
    orderType: OrderType,
    trader: string,
    baseToken: string,
    quoteToken: string,
    amount: string,
    price: string,
    executed: boolean,
}


(async () => {
    const streams = {
        'binance': 'ETH/USDT',
    } as { [key: string]: string }


    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const webSocketProvider = new ethers.providers.WebSocketProvider(websocketRpcUrl);

    const wallet = new ethers.Wallet(walletKey, provider);

    const makeOrderContract = MakeOrderAbi__factory.connect(makerOrderAddr, wallet);
    const mUSDCContract = ERC20Abi__factory.connect(mUSDCAddr, wallet);
    const mWethContract = ERC20Abi__factory.connect(mWethAddr, wallet);

    const mUSDC = await mUSDCContract.symbol();
    const mWeth = await mWethContract.symbol();
    const mUSDCDecimal = await mUSDCContract.decimals();
    const mWethDecimal = await mWethContract.decimals();
    await mWethContract.approve(makerOrderAddr, ethers.constants.MaxUint256);
    await mUSDCContract.approve(makerOrderAddr, ethers.constants.MaxUint256);

    const addressToTokens = {
        [mWethAddr]: {
            symbol: mWeth,
            decimals: mWethDecimal
        },
        [mUSDCAddr]: {
            symbol: mUSDC,
            decimals: mUSDCDecimal
        },
    };


    // Listen to balance
    const transferToFilter = mUSDCContract.filters.Transfer(null, wallet.address, null);
    const transferFromFilter = mUSDCContract.filters.Transfer(wallet.address, null, null);
    
    // TODO: show balance
    const mUSDCHandler = async () => {
        const [error, balance] = await to(mUSDCContract.balanceOf(wallet.address));
        // console.log(error);
        // console.log(formatUnits(balance || '', mUSDCDecimal));
    }
    const mWethHandler = async () => {
        const [error, balance] = await to(mUSDCContract.balanceOf(wallet.address));
        // console.log(error);
        // console.log(formatUnits(balance || '', mUSDCDecimal));
    }

    mUSDCContract.on(transferFromFilter, mUSDCHandler);
    mUSDCContract.on(transferToFilter, mUSDCHandler);
    mWethContract.on(transferFromFilter, mWethHandler);
    mWethContract.on(transferToFilter, mWethHandler);

    // Listen to orderPlace
    const PlaceOrderFilter = makeOrderContract.filters.OrderPlaced(null, null, null);

    let displayPendingOrders = [['ID', 'OrderType', 'Trader', 'BaseToken', 'QuoteToken', 'Amount', 'Price', 'Executed']];
    let displayHistoryOrders = [['ID', 'OrderType', 'Trader', 'BaseToken', 'QuoteToken', 'Amount', 'Price', 'Executed']];
    let pendingOrders = [] as Order[];
    let historyOrders = [] as Order[];
    makeOrderContract.on(PlaceOrderFilter, async (_id, _trader, _orderType) => {
        const [error, order] = await to(makeOrderContract.orders(_id));
        if (!order) return;

        const {
            orderType,
            trader,
            baseToken,
            quoteToken,
            amount,
            price,
            executed
        } = order;
        const amountFormat = formatUnits(amount, addressToTokens[orderType === OrderType.Buy ? baseToken : quoteToken].decimals).toString();
        const priceFormat = formatUnits(price, addressToTokens[orderType === OrderType.Sell ? quoteToken : baseToken].decimals).toString();
        const typeSyntax = orderType === OrderType.Buy ? 'Buy' : 'Sell';
        pendingOrders.push({
            id: _id.toString(),
            orderType,
            trader,
            baseToken: addressToTokens[baseToken].symbol,
            quoteToken: addressToTokens[quoteToken].symbol,
            amount: amountFormat,
            price: priceFormat,
            executed,
        })
        displayPendingOrders = [...displayPendingOrders, [_id.toString(),
            typeSyntax,
            trader,
        addressToTokens[baseToken].symbol,
        addressToTokens[quoteToken].symbol,
            amountFormat,
            priceFormat,
        executed.toString(),
        ]];
        pendingOrderList.setRows(displayPendingOrders);

        screen.render();
    });

    const [error, res] = await to(makeOrderContract.placeOrder(
        OrderType.Sell, // orderType
        mWethAddr, // baseToken
        mUSDCAddr, // quoteToken
        parseUnits('1', mWethDecimal), // amount
        parseUnits("1873", mWethDecimal), // price
    ));
    const [,] = await to(makeOrderContract.placeOrder(
        OrderType.Buy, // orderType
        mWethAddr, // baseToken
        mUSDCAddr, // quoteToken
        parseUnits('1', mWethDecimal), // amount
        parseUnits("1874", mWethDecimal), // price
    ));

    await Promise.all(Object.keys(streams).map(exchangeId =>

        (async () => {

            const exchange = new ccxt.pro.binance({
                enableRateLimit: true,
                options: {
                    tradesLimit: 100, // lower = better, 1000 by default
                },
            })
            const symbol = streams[exchangeId]
            let lastId = ''
            while (true) {
                const [, ticker] = await to(exchange.watchTicker(symbol))


                pricesList.addItem(`Ask: ${ticker.ask}, Bid: ${ticker.bid}`);
                pricesList.select(pricesList.items.length - 1);
                screen.render();
                const sortedPendingOrders = pendingOrders.sort((a, b) => +b.id - +a.id);
                const findBuyOrder = sortedPendingOrders.find(order => order.price >= ticker.bid) as Order;
                const findSellOrder = sortedPendingOrders.find(order => order.price <= ticker.ask) as Order;

                if (findBuyOrder) {
                    const [, res] = await to(makeOrderContract.executeOrder(findBuyOrder.id));
                    if (!res) return;
                    const [, res2] = await to(res.wait());
                    if (res2?.status === 1) {
                        findBuyOrder.executed = true;
                        pendingOrders = pendingOrders.filter(item => item.id !== findBuyOrder.id);
                        historyOrders = [...historyOrders, findBuyOrder];
                        displayPendingOrders = displayPendingOrders.filter(order => order[0] !== findBuyOrder.id.toString());
                        displayHistoryOrders = [...displayHistoryOrders, Object.values(findBuyOrder).map(item => item.toString())];

                        pendingOrderList.setRows(displayPendingOrders);
                        historyOrderList.setRows(displayHistoryOrders);
                        screen.render();
                    }
                }
                if (findSellOrder) {
                    const [error, res] = await to(makeOrderContract.executeOrder(findSellOrder.id));
                    if (!res) return;
                    const [, res2] = await to(res.wait());
                    if (res2?.status === 1) {
                        findSellOrder.executed = true;
                        pendingOrders = pendingOrders.filter(item => item.id !== findSellOrder.id);
                        displayPendingOrders = displayPendingOrders.filter(order => order[0] !== findSellOrder.id.toString());
                        pendingOrderList.setRows(displayPendingOrders);
                        screen.render();
                    }
                }
            }

        })())
    )
})()