const path = require('path');

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

const expressApp = express();
const httpServer = http.createServer(expressApp);

const websocketServer = new Server(httpServer);

expressApp.use(express.static(`${__dirname}/../public/assets/styles`));

expressApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

websocketServer.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (chatMessage) => {
    console.log(`message: ${chatMessage.message} on
      ${chatMessage.timestamp} by client ${chatMessage.clientId}`);

    websocketServer.emit('chat message', chatMessage);
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
