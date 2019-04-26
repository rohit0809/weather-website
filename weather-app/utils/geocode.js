const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoicm9oaXQwODA5IiwiYSI6ImNqdXgydmY0aDA1Z2o0NHBncDk2ZXpzZHIifQ.gTefkGtC2RSDT21bIpaYfw&limit=1'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Error!!!Unable to connect to api!!', undefined)
        }
        else if(body.features.length === 0){
            callback('Error!!!Unable to search location!! Try some other strings', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode