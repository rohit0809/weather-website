const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6614dc7c2267f384ac1a99d86af2a8bb/'+latitude+','+longitude+'?units=si'

    request({url:url, json:true}, (error, response) => {
        if(error){
            callback('Error!!!Unable to connect to api!!', undefined)
        }
        else if(response.body.error){
            callback('Error!!!Unable to find location!!', undefined)
        }
        else{
            callback(undefined, {
            summary: response.body.daily.data[0].summary,
            temperature: ' It is currently '+response.body.currently.temperature+' degrees out.',
            precip: 'There is a '+ response.body.currently.precipProbability +'% chance of rain.'
            })
        }
    })

}

module.exports = forecast