//To work with file u need to import the fs module

const fs = require("fs") // only for custoom modules we use ./ for std modules u directly refer the modules name.
const { buffer } = require("stream/consumers")

/*********Read a file synchronously*********/
/*
const data = fs.readFileSync('./Ex04.js', 'utf8')

//readFileSync api will read the contents of the file  in the format specified and store it into a variable(data) 

console.log(data)  */

/*********Read a file asynchronous manner*********/
/*
fs.readFile("./fileDemo.js", 'utf8', function(err, data){
    if (err != null){
        console.log(err.message);
    }else{
        console.log(data)
    }


});

console.log("----End of the program-----")  */

/*********Writing a file in js*********/
/*
const filename = "MyFile.txt"

fs.writeFileSync(filename,"Some text in the file in the text foemat", "utf-8")  */

/*********Writing a file in asynch*********/
/*
const filename = "MyFile.txt"

fs.writeFile(filename,"This is the content that that i want to replace in the file " ,(err) =>{
    if (err != null) console.log(err.message)
})

console.log("async call will not stop the app from continuing")

*/
/*********Appending the contents of the file*********/

fs.open(MyFile.txt, 'a+', function(err, fd){
    if (err!= null){
        console.log(err.message)
    } else{
        let content = "Data in some format \n";
        fs.write(fd, content, (e, written, buffer) =>{
            fs.close(fd,()=>{
                console.log("File writing is completed")
            })
        })
    }
})
