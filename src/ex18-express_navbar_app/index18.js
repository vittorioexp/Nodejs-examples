const express = require("express");
const app = new express();
const path = require("path");

const port = 5000;

app.use(express.static("./static"));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./static/index.html"));
});

app.all("*",(req, res)=>{
    res.status(404).send("resource not found!");
});

app.listen(port, (req, res)=>{
    console.log("server is active - http://localhost:" + port);
})