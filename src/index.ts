import ccxt from 'ccxt';
import { to } from 'await-to-js';
import { ethers } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import 'dotenv/config'
import { MakeOrderAbi__factory } from "../contracts_types/factories/MakeOrder.sol/MakeOrderAbi__factory";
import { ERC20Abi__factory } from '../contracts_types';

const walletKey = process.env.EXCHANGE_KEY || '';
const rpcUrl = process.env.RPC_URL || '';
const mUSDCAddr = process.env.mUSDC_ADDR || '';
const mWethAddr = process.env.mWETH_ADDR || '';
const makerOrderAddr = process.env.MAKE_ORDER_CONTRACT_ADDRESS || '';

enum OrderType {
    Buy,
    Sell
}

(async () => {
    const streams = {
        'binance': 'ETH/USDT',
    } as { [key: string]: string }


    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(walletKey, provider);
    const makeOrderContract = MakeOrderAbi__factory.connect(makerOrderAddr, wallet);
    const mUSDCContract = ERC20Abi__factory.connect(mUSDCAddr, wallet);
    const mWethContract = ERC20Abi__factory.connect(mWethAddr, wallet);

    const mUSDC = await mUSDCContract.symbol();
    const mWeth = await mWethContract.symbol();
    const mUSDCDecimal = await mUSDCContract.decimals();
    const mWethDecimal = await mWethContract.decimals();

    console.log({ mUSDC, mWeth });
    await mUSDCContract.approve(makerOrderAddr, ethers.constants.MaxUint256);
    const [error, res] = await to(makeOrderContract.placeOrder(
        OrderType.Buy, // orderType
        mWethAddr, // baseToken
        mUSDCAddr, // quoteToken
        parseUnits('1', mWethDecimal), // amount
        parseUnits("100", mWethDecimal), // price
    ));
    // console.log(error, res);
    if (!res) return;
    const result = await res.wait();
    const id = result?.events?.[result?.events?.length - 1]?.args?.id.toString()
    console.log({ id });


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
                console.log('---')
                const [_, trades] = await to(exchange.watchTrades(symbol))
                const [, ticker] = await to(exchange.watchTicker(symbol))
                console.log(ticker.ask, ticker.bid);
                if (ticker.ask < 1880.4) {
                    // const count = await makeOrderContract.orderCount()


                }
                // for (let i = 0; i < trades.length; i++) {
                //     const trade = trades[i]
                //     if (trade['id'] > lastId) {
                //         console.log(exchange.iso8601(exchange.milliseconds()), exchange.id, trade['symbol'], trade['id'], trade['datetime'], trade['price'], trade['amount'])
                //         lastId = trade['id']
                //     }
                // }
            }

        })())
    )
})()