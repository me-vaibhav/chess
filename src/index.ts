import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws:any) => {
    ws.on('error',console.error)
    ws.on('message', (message:any) => {
        console.log(message)
    })
    ws.send("hello")
})  