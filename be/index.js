const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express();
const server = http.createServer(app)
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

const port = 1234;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
