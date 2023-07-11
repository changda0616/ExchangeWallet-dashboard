"use strict";
require('dotenv').config()
const CoinGecko = require('coingecko-api');
console.log(process.env.EXCHANGE_API_KEY);


//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async () => {
    let data = await CoinGeckoClient.ping();
    console.log(data)
};
func();