import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8088 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
  setInterval(() => {
    ws.send(new Date().toString());
  }, 1000);
});