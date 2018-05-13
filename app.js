//importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const config = require('./config/database');
var ip = require('ip');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var ss = require('socket.io-stream');
var fs = require('fs');

const route = require('./routes/route');

//coneect to mongoDB
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB database @ 27017');
})

mongoose.connection.on('error', () => {
    if (err) {
        console.log('Error in database connection:' + err);
    }
})

//port number
const port = 3000;

//adding middleware - cors
app.use(cors());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//body - parser
app.use(bodyparser.json()); // support json encoded bodies
//app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//routes
app.use('/api', route);

//testing Server
app.get('/', (req, res) => {
    res.send('foobar');
});

server.listen(port, function () {
    console.log("Node Server is setup and it is listening on port" + ip.address());
});

//emit messages
io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', function () {
        console.log('User disconnected');
    });
    socket.on('new-message', (data) => {
        io.emit('new-message', data);
    });
});

/*
io.on('connection', function (socket) {
    fs.readFile('../../ LDF_Photo / 3.png', function (err, buf) {
        // it's possible to embed binary data
        // within arbitrarily-complex objects
        socket.emit('image', { image: true, buffer: buf });
        console.log('image file is initialized');
    });
});*/

io.on('connection', function (socket) {
    var readStream = fs.createReadStream('../../LDF_Photo/1.jpg', {
        encoding:'binary'
    }), chunks = [];

    readStream.on('readable', function () {
        console.log('Image loading');
    });

    readStream.on('data', function (chunk) {
        chunks.push(chunk);
        socket.emit('img-chunk', chunk);
    });

    readStream.on('end', function () {
        console.log('Image loaded');
    });
});

