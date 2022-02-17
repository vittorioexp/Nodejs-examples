const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);

    // When Node.js receives the final part of the HTTP response message,
    // it calls the response.on('end') event handler.
    res.end('Hello, World!');
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(8080);