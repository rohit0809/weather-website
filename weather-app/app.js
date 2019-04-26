const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if(location){
    geocode(location, (error, data) => {
        if(error){
            return console.log('Error in geocode!!!!')
        }
         forecast(data.latitude, data.longitude, (error, forecastData) => {
             if(error){
                 return console.log('Error in forecasting!!!!')
             }
             console.log(data.location)
             console.log(forecastData)
         })
     })
}
else{
    console.log('No location provided!!!!')
}


