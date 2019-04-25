const request = require('request')

const url = "https://api.darksky.net/forecast/6614dc7c2267f384ac1a99d86af2a8bb/37.8267,-122.4233"

request({url:url, json:true}, (error, response) => {
    console.log('It is currently '+response.body.currently.temperature+' degrees out. There is a '+ response.body.currently.precipProbability +'% chance of rain.')
})