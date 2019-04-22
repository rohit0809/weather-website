const fs = require('fs')
const book = {
    title: 'Hero',
    author: 'Rohit Anand'
}

const parseData = fs.readFileSync('1-json.json')
const data = parseData.toString();
const obj = JSON.parse(data)

obj.name = 'Rohit Anand'
obj.age = 25

const objstring = JSON.stringify(obj)
fs.writeFileSync('1-json.json',objstring)