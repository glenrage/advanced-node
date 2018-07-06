const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start);
    res.send('hi');
  });
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000);
