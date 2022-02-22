
const my_os = require("./my_os");
const express = require('express');
const app = new express();

var userRouter = express.Router()
var itemRouter = express.Router()

userRouter.use(function (req, res, next) {
    console.log('User query Time:', Date());
    next();
})

userRouter.get('/:id', function (req, res, next) {
    res.send("User "+req.params.id+" last successful login "+Date() + " " + JSON.stringify(my_os, null, 2))
})

itemRouter.use(function (req, res, next) {
    console.log('Item query Time:', Date())
    next()
})

itemRouter.get('/:id', function (req, res, next) {
    res.send("Item "+req.params.id+" last enquiry "+Date())
})

app.use('/user', userRouter)
app.use('/item', itemRouter)


app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})
