console.log('Client side JS file is running!!!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageone.textContent = 'Loading Results......'
    messagetwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageone.textContent = data.error
            }else{
                messageone.textContent = data.location
                messagetwo.textContent = data.forecast
            }
        })
    })
})