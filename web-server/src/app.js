const express = require('express')
const path = require('path')

const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectory))


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

