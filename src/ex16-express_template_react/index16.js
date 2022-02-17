
const months = ["january", "february", "march", "april",
    "may", "june", "july", "august",
    "september", "october","november","december"];

const express = require('express');
const app = new express();
const expressReactViews = require('express-react-views');

const jsxEngine = expressReactViews.createEngine();

app.set('view engine', 'jsx');

app.set('views', 'myview');

app.engine('jsx',jsxEngine);

app.get("/:name",(req,res)=>{
    res.render('index', { name: req.params.name });
});

app.get("/fetch/:num", (req, res)=>{
    let num = parseInt(req.params.num);
    if (num < 1 || num > 12) {
        res.render('index', {name: "user, next time insert a valid number between 1 and 12!"});
    } else {
        res.render('index', {name: months[num-1]});
    }
});

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})
