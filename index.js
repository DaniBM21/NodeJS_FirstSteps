/* CREATE SERVER
const http = require('http');

const handleServer = function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>HELLO WORLD FROM NODEJS</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log('Server run on port 3000'.blue);
}); */

const express = require('express');
const colors = require('colors');


const server = express();

server.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD FROM EXPRESS AND NODEJS</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('server on port 3000'.blue)
});