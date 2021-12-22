
const http = require("http")
const fs = require("fs")
const httpParse = require('url').parse;
const root = __dirname;

function displayPage(res, url){
    const file = root + url + ".html";
    fs.createReadStream(file).pipe(res)
}

function errorPage(res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write("<h1>Error Page</h1>")
    res.write("<hr>")
    res.write("<h2>OOPS! SomeThing Wrong has happened.</h2>This file is not available with us!!!")
    res.end();
}

http.createServer((req, res)=>{
    if(req.method =="POST"){
        const query = httpParse(req.url).query;
        if(query != null){
            let obj = httpParse(req.url, true).query;
            const content = `Thanks!! Mr.${obj.txtName}.\nUR Address ${obj.txtAddr} and other details are stored with us!. We will come back to you`;
            res.write(content)
            res.end();
            return; 
        }
    }else if(req.method == "POST"){
        req.on('data', (inputs)=>{
            let body = ''
            body += inputs;
            res.write(body);
            res.end();
            return;
        })
    }
    switch (req.url) {
        case "/favicon.ico":
            res.end()
            break;
        case "/HomePage":
            displayPage(res, req.url);
            break;
        case "/Registration":
            displayPage(res, req.url)
            break;
        case "/AboutUs":
            displayPage(res, req.url)
            break;
        default:
            errorPage(res);
            break;
    }
}).listen(1234);