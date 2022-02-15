const express = require('express');
const app = new express();

const userRouter = express.Router();
const itemRouter = express.Router();

// http://localhost:3333/user/1 gives error
// http://localhost:3333/user/2 works

app.use("/user/:id", function (req, res, next) {
    if(req.params.id == 1) {
        throw new Error("Trying to access admin login")
    } else{
        next();
    }
})

app.use(function (err,req, res, next) {
    if(err != null) {
        res.status(500).send(err.toString())
    } else{
        next();
    }
})

app.get("/user/:id", (req,res) => {
    return res.send("Hello! User Id ",req.params.id);
});


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})
