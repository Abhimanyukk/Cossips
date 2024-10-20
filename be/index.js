const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'build')))

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('Disconnect:', socket.id)
    })
})

app.get('*', (req, res) => {
    console.log('skjskd')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = 1234;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
