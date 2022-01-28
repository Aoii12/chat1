const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.use(express.static(__dirname + '/assets'))

io.on('connection', (socket) => {
    socket.on('соообщение чата', (data) => {
        io.emit('соообщение чата', {
            message:data.message,
            name:data.name
        })
    })
})



http.listen(3000, () =>{
    console.log('запуск сервера')
})