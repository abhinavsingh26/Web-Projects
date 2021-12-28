// http module of node js is used to create web server based apps that uses HTTP protocol to process web  documents like html, css, and other web basesd content thru nodejs 

const http = require("http")

const server = http.createServer((req, res) =>{
    if (req.url != "favicon.ico") {
        res.write("<h1>welcome to server programming</h1>");
        res.end()
    }
})

server.listen(1234)