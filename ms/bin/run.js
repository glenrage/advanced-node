const service = require('../server/service');

const http = require('http');

const server = http.createServer(service);

server.listen(3000);

server.on('listening', () => {
  console.log('running on port 3000');
});
