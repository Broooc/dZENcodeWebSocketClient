const WebSocket = require('ws')
const { connectionURL } = require('./config')

const socket = new WebSocket(connectionURL)

socket.addEventListener('open', (event) => {
    
});

socket.addEventListener('message', (event) => {

    try {
        const messageFromTheServer = JSON.parse(event.data)
        console.log(messageFromTheServer)
    } catch (err) {
        if (err.name === 'SyntaxError') {
            console.log(event.data)
        } else {
            console.log(err)
        }
    }

})