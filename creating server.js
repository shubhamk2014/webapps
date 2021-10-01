const http = require("http");
const fs = require('fs')

const contentTxt = fs.readFileSync('animation and keyframes.html')

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) =>{
    // res.statusCode= 200;
    // res.setHeader("content-type" ,"text/html");
    res.writeHead(200,{'content-type':'text/html'}); //we can write this instead of above two lines
    res.end(contentTxt)
})

server.listen(port, hostname, ()=>{
    console.log(`server started at http://${hostname}:${port}/`);
})