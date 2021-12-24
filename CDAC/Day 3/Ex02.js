// This file is a demo on consuming a jd file in this program.
/*
let SI = require("./simpleIntrest")
console.log("Start of the script")

SI(5000,4,4)

console.log("End of the script")
*/

const SiIn = require("./simpleIntrest")

console.log("Start of the script")

const SI = new SiIn(5000,4,4)

console.log(SI.getVal());

console.log("End of the script")