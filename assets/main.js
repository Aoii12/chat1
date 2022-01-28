const socket = io()
const message = document.querySelector('.message')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const nameBlock = document.querySelector('.name')

const userName = prompt('Ваше имя: ');
nameBlock.innerHTML = userName;

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(input.value){
        socket.emit('соообщение чата', {
            message:input.value,
            name:userName
        })
        input.value=''
    }
})

socket.on('соообщение чата', (data) => {
    const item = document.createElement('li')
    item.innerHTML = data.name + ':'+ data.message
    message.appendChild(item)
})