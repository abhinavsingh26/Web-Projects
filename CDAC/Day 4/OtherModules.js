const { Console } = require("console")
const util = require("util") // used for string based operations in ur apps.
const os = require("os") // Module for getting info about our os ../.

const data = require("./MOCK_DATA.json") // Get the JSON Data

const name =" Abhinav"

const address = "RR Nagar, Banglore"

const age = 30
const msg = util.format("My Name is %s from %s and I am %d years old ", name, address, age)

console.log(msg)

///////////////////////////////OS related operation////////////////////////////////////////

console.log("The machine name is" + os.hostname())
console.log("The machine  os is " + os.type())
console.log("The current version of os is " + os.version())
console.log("The machine is up and running for" + (os.uptime()/3600))
console.log("The machine has " + (os.cpus()).length + " CPUs in it")
console.log("The toatal memory of this machine is " + (os.totalmem()))
/////////////////////////////Console based API///////////////////////////////////

console.table([
    {Name:"Abhinav", "Address":"prayagraj", State: "UP" },
    {Name:"Sunil", "Address":"no where", State: "UP" },
    {Name:"Seema", "Address":"delhi", State: "UP" },
    {Name:"Vaibhav", "Address":"Mumbai", State: "UP" },
    {Name:"Leena", "Address":"Haryana", State: "UP" },
    {Name:"Marco", "Address":"Tamilnadu", State: "UP" },
    {Name:"Polo", "Address":"guvahati", State: "UP" },
])

-
console.table(data) // push the data into the table of the console.
