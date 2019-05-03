//Object property shorthand

const name = 'Rohit'
const userage = 25

const user = {
    name,
    age: userage,
    location: 'Kolkata'
}

console.log(user)

//Object destructuring 

const product = {
    label: 'Red notebook',
    price: 20,
    stock: 50,
    saleprice: undefined 
}

const {label, price, stock, rating = 10} = product 

const transaction = (type, {label, stock}) => {
    console.log(type,label,stock)
}

transaction('order',product)