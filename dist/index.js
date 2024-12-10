import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (message) => {
        console.log(message);
        console.log(message);
    });
    ws.send("hello");
});
