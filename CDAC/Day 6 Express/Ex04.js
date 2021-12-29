const app = require("express")(); //get express
const mongo = require("mongodb").MongoClient; // connect mongodb
const parser = require("body-parser"); //for handling post data as body
//const cors = require("cors")
const root = __dirname;


app.use(parser.urlencoded({"extended":true}))
app.use(parser.json())
//app.use(cors())

let db;
//Gets the db coonection to the database
getconnection = () => {
    const url = "mongodb://127.0.0.1:27017/CDAC"
    let mc = mongo.connect(url,(err, res)=>{
        if(err){
            console.error(err.message);
            return;
        }
        db= res.db("CDAC");
    })
}
getconnection();

app.get("/employee",(req,res)=>{
    db.collection("employee").find().toArray((e,result)=>{
        res.send(result)
    })
})
app.get("/Emplist", (req,res)=>{
    res.sendFile(root + "/Employees.html")
})

app.listen(1234, ()=>{
    console.log("server is ready.")
})

app.get("/employee/:id", (req, res)=>{
    const id = parseInt(req.params.id)//Reads the Query string of the URL and extract the Id passed by the request. 
    db.collection("employee").find({"empId": id}).toArray((e, result)=> res.send(result))
})