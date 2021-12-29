const express = require("express");

const app = express(); // app is the instance of express module

const root = __dirname;

app.get("/", (req, res) => res.send("Testing Express App!"))
app.get("/Home", (req, res)=> res.sendFile(root + "/HomePage.html"))
app.listen(1234, () => console.log("server is up and running at 1234"))   