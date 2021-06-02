const nock = require('nock')
const axios = require('axios')
const expect = require('chai').expect
const api = require('../index').ApiCrypto

describe('Tests', function(){
    it('API status/v1/symbols is 200', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/symbols').reply(200, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/symbols',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(200)

    })


    it('API status/v1/exchanges is 200', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/exchanges').reply(200, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/exchanges',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(200)

    })


    it('API status/v1/quotes is 200', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00').reply(200, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(200)

    })


    /* ------------------------------------ 404 ------------------------------------ */

    
    it('API status/v1/symbols is 404', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/symbols').reply(404, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/symbols',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(404)

    })


    it('API status/v1/quotes is 404', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00').reply(404, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(404)

    })


    it('API status/v1/exchanges is 404', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/exchanges').reply(404, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/exchanges',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(404)

    })


    /* ------------------------------------ 500 ------------------------------------ */


    it('API status/v1/symbols is 500', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/symbols').reply(500, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/symbols',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(500)

    })


    it('API status/v1/quotes is 500', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00').reply(500, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(500)

    })


    it('API status/v1/exchanges is 500', async function(){
        let status = null

        nock('https://rest.coinapi.io', {
            reqheaders: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).get('/v1/exchanges').reply(500, 'Ok!')

        await axios({
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/exchanges',
            headers: {
                'X-CoinAPI-Key': 'FA3E81E4-382E-4FD7-8B8B-ACD00FFCDEB5'
            }
        }).then((resp) => status = resp.status).catch((error) => status = error.response.status)
        
        expect(status).to.equal(500)

    })


})
