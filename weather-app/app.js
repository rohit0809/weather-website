const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('Patna', (error, data) => {
    console.log(error)
    console.log(data)
})

forecast(25.61, 85.14139, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

