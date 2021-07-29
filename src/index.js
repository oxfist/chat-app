const path = require('path');

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

const expressApp = express();
const httpServer = http.createServer(expressApp);

const websocketServer = new Server(httpServer);

expressApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

websocketServer.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);

    websocketServer.emit('chat message', msg);
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
