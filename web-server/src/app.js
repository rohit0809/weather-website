const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

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
        helpText: 'God Help those who help themselves!!!'
    })
})


app.get('/weather',(req,res) => {
    res.send([{
        location: 'Kolkata',
        forecast: '50 degree'
    },{
        location: 'Patna',
        forecast: '15 degree'
    }])
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        name: 'Rohit Anand',
        errorMessage: 'Help article not found!!!'
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

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})

