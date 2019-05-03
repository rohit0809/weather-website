const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if(location){
    geocode(location, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log('Error in geocode!!!!')
        }
         forecast(latitude, longitude, (error, forecastData) => {
             if(error){
                 return console.log('Error in forecasting!!!!')
             }
             console.log(location)
             console.log(forecastData)
         })
     })
}
else{
    console.log('No location provided!!!!')
}


