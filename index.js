const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

app.use(express.static(__dirname + '/assets'))

app.post('/url', function(req, res) {
    const url = req.body.url;

    res.send(url);
});

io.on('connection', (socket) => {
    socket.on('соообщение чата', (data) => {
        io.emit('соообщение чата', {
            message:data.message,
            name:data.name
        })
    })
})



