const express = require("express");
const app = express();
const connectDB = require('./database/connect');
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config({path: "./var.env"});

const port = process.env.PORT || 5000;

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection with the database established.");
        app.listen(port, (req,res)=>{
            console.log("Server on at http://localhost:" + port);
        })
    } catch (error) {
        console.log(process.env.MONGO_URI)
    }
};

start();

