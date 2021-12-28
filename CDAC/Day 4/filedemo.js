//To work with file u need to import the fs module

const fs = require("fs") // only for custoom modules we use ./ for std modules u directly refer the modules name.

/*********Read a file synchronously*********/

const data = fs.readFileSync('./Ex04.js', 'utf8')

console.log(data)