const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6614dc7c2267f384ac1a99d86af2a8bb/'+latitude+','+longitude+'?units=si'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Error!!!Unable to connect to api!!', undefined)
        }
        else if(body.error){
            callback('Error!!!Unable to find location!!', undefined)
        }
        else{
            callback(undefined, ' It is currently '+body.currently.temperature+' degrees out. Highest Temperature throughout the day will be '+ body.daily.data[0].temperatureHigh +' and lowest will be '+ body.daily.data[0].temperatureLow +'. There is a '+ body.currently.precipProbability +'% chance of rain.')
        }
    })

}

module.exports = forecast