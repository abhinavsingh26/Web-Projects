//This example shows how to connect to mongodb database using nodejs. 
//Ensure that U have installed mongodb module thru npm to Ur local directory.
const mongo = require("mongodb").MongoClient;//Get the mongodb module.
const url = "mongodb://127.0.0.1:27017/CDAC"//define the collection location. 
let database;

// mongo.connect(url, (err, mgCl)=>{
//     database = mgCl.db("CDAC")
//     database.collection('employee').find().toArray((e, res) =>{
//         res.forEach((value)=> console.log(`${value.empName}`))
//     })
// })




//Mongdb-Express-Angular-NodeJs Stack
mongo.connect(url, (err, mgCl)=>{
    database = mgCl.db("CDAC")//get the database
    database.collection("employee").find().toArray((e, res)=>{
        res.forEach((value)=>{
            //console.log(`${JSON.stringify(value)}`)
            console.log(`${value.empName} from ${value.empSalary}`)
        })
    })
})
