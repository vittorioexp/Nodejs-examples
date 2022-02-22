const http = require('http');
const today = require('./today');
const names = require("./names");

const requestListener = function (req, res) {

    res.writeHead(200);

    let dateVal = today();

    let greeting = "Keep sleeping, it is still not morning: " +  dateVal.getHours();

    if (dateVal.getHours()>6 && dateVal.getHours()<12) {
        greeting = "Good morning " + names.john;
    } else if (dateVal.getHours()>=12 && dateVal.getHours()<18) {
        greeting = "Good afternoon " + names.peter;
    }else if (dateVal.getHours()>=18 && dateVal.getHours()<21) {
        greeting = "Good evening " + names.hellen;
    }else if (dateVal.getHours()>=21 && dateVal.getHours()<24) {
        greeting = "Good night " + names.bruce;
    }

    res.end(`Hello, ${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on http://localhost:' + port);
server.listen(port);