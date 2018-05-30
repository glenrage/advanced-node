const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth');

//middlewares setup
app.use(morgan('combined')); //morgan logs incoming requests
app.use(bodyParser.json({ type: '*/*' })); //parses incoming requests into json
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on', port);
