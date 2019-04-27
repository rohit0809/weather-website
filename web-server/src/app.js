const express = require('express')

const app = express()

app.get('',(req,res) => {
    res.send('<h1>Hello Rohit</h1>')
})

app.get('/help',(req,res) => {
    res.send([{
        name:'Rohit',
        age: 26
    },
    {
        name: 'Bholu',
        age: 21
    }])
})

app.get('/about',(req,res) => {
    res.send('<h1>About Page</h1>')
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

//app.com
//app.com/help
//app.com/about

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})

