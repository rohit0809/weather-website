const https = require('https')
const url = 'https://api.darksky.net/forecast/6614dc7c2267f384ac1a99d86af2a8bb/25,85?units=si'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error ', error)
})

request.end()
