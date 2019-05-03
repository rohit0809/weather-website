const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

//Define Paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//Set up static directory to serve
app.use(express.static(publicDirectory))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Rohit Anand'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Rohit Anand'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help Page',
        name: 'Rohit Anand',
        helpText: 'Sorry!!! No help :D God helps those who help themselves!!!'
    })
})


app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide a valid address!!'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({
                error
            })
        }
         forecast(latitude, longitude, (error, forecastData) => {
             if(error){
                 return res.send({
                    error
                })
             }
             res.send({
                forecast: forecastData,
                location,
                address: req.query.address 
            })
         })
     })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        name: 'Rohit Anand',
        errorMessage: 'Help article not found!!!'
    })
})

app.get('/product', (req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
    })
})

app.get('*', (req,res) => {
    res.render('404',{
        title: '404',
        name: 'Rohit Anand',
        errorMessage: 'Page not found!!!'
    })
})

//app.com
//app.com/help
//app.com/about

app.listen(port, ()=>{
    console.log('Server is up on port '+port)
})

