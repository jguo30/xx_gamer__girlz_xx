const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
  log: ['query'],
})

const server = https.createServer({
  // cert: fs.readFileSync('/etc/letsencrypt/live/harmony.haerin.newjeans.live/fullchain.pem'),
  // key: fs.readFileSync('/etc/letsencrypt/live/harmony.haerin.newjeans.live/privkey.pem')
});
const wss = new WebSocket.Server({ server });

console.log("started web socket server...")

wss.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {

    // sends the data to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

//Ensure that the port is not in use
server.listen(56112);

