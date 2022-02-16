const express = require('express');
const app = new express();

//http://localhost:3333/home?password=pwd123 will work

app.use(function (req, res, next) {
    if (req.query.password !== "pwd123") {
        return res.status(402).send("This user cannot login ");
    }
    console.log('Time:', Date.now())
    next()
});

app.get("/home", (req,res) => {
    return res.send("Hello World!");
});

app.listen(3333, () => {
    console.log(`listening at http://localhost:3333`)
});




/*

// User defined middleware

const express = require('express');
const app = new express();

function myLogger(req, res, next){
    req.timeReceived = Date();
    next();
  }

app.use(myLogger)

app.get("/",(req,res)=>{
    res.send("Request received at "+req.timeReceived+" is a success!")
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

 */