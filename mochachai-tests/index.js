//ApiCrypto
const axios = require('axios')

class ApiCrypto{

    static async getExchanges(){
        const response = await axios.get('https://rest.coinapi.io/v1/exchanges', {
            method: "GET",
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        })
        .then((res) => {
            console.log(res.data)
            console.log(res.status)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    static async getSymbols(){
        const response = await axios.get('https://rest.coinapi.io/v1/symbols', {
            method: "GET",
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        })
        .then((res) => {
            console.log(res.data)
            console.log(res.status)
            
        })
        .catch((error) => {
            console.error(error)
        })
    }

    static async getHistory(){
        const response = await axios.get('https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00', {
            method: "GET",
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        })
        .then((res) => {
            console.log(res.data)
            console.log(res.status)
        })
        .catch((error) => {
            console.error(error)
        })
    }


}

module.exports = {ApiCrypto}