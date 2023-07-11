var blessed = require('blessed');

// 創建一個 blessed 畫面物件
var screen = blessed.screen();

var priceTitle = blessed.text({
    top: '0',
    left: '0',
    width: '20%',
    height: '5%',
    content: 'Price Updates',
    align: 'center',
    style: {
        fg: 'white',
    }
});

// 創建左側的 box
const pricesList = blessed.list({
    top: '5%',
    left: '0',
    width: '20%',
    height: '95%',
    border: {
        type: 'line'
    },
    style: {
        border: {
            fg: '#f0f0f0'
        },
        selected: {
            bg: 'green'
        },
    },
    keys: true,
    vi: true
});

const pendingOrderList = blessed.table({
    parent: screen,
    top: '0%',
    left: '20%',
    width: '40%',
    height: '100%',
    border: {
        type: 'line'
    },
    style: {
        border: {
            fg: '#f0f0f0'
        },
        selected: {
            bg: 'blue'
        },
    },
    interactive: false,
    label: ' Pending ',
    align: 'center',
    keys: true,
    fg: 'white',
    columnSpacing: 10, // In chars.
    columnWidth: [10, 10, 10, 10, 10, 10, 10, 10]
});

pendingOrderList.setData([
    ['ID', 'OrderType', 'Trader', 'BaseToken', 'QuoteToken', 'Amount', 'Price', 'Executed']
]);


// 創建右側的 box
const historyOrderList = blessed.table({
    parent: screen,
    top: '0%',
    left: '60%',
    width: '40%',
    height: '100%',
    border: {
        type: 'line'
    },
    style: {
        border: {
            fg: '#f0f0f0'
        },
        selected: {
            bg: 'blue'
        },
    },
    interactive: false,
    label: ' History ',
    align: 'center',
    keys: true,
    fg: 'white',
    columnSpacing: 10, // In chars.
    columnWidth: [10, 10, 10, 10, 10, 10, 10, 10]
});
historyOrderList.setData([
    ['ID', 'OrderType', 'Trader', 'BaseToken', 'QuoteToken', 'Amount', 'Price', 'Executed']
]);

// 把 box 物件加到畫面上
screen.append(priceTitle);
screen.append(pricesList);

// 讓程序能夠回應鍵盤事件
screen.key(['escape', 'q', 'C-c'], function (ch: any, key: any) {
    return process.exit(0);
});

// 渲染畫面

export { screen, pricesList, pendingOrderList, historyOrderList }