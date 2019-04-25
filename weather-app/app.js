const request = require('request')

// darknet api
const url = "https://api.darksky.net/forecast/6614dc7c2267f384ac1a99d86af2a8bb/37.8267,-122.4233?units=si"

request({url:url, json:true}, (error, response) => {
    console.log(response.body.daily.data[0].summary+' It is currently '+response.body.currently.temperature+' degrees out. There is a '+ response.body.currently.precipProbability +'% chance of rain.')
})

//mapbox api

const geourl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9oaXQwODA5IiwiYSI6ImNqdXgydmY0aDA1Z2o0NHBncDk2ZXpzZHIifQ.gTefkGtC2RSDT21bIpaYfw&limit=1"

request({url:geourl, json:true}, (error, response) => {
    console.log('Lattitude is '+response.body.features[0].center[0]+' and Longitude is '+response.body.features[0].center[1])
})

