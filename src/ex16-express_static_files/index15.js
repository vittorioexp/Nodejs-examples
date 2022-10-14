
/*
This server, as you see doesn't have any end points. But it has a middleware which
sets the directory for static files. So any file that is in the static_files directory will be accessible.
 */

const express = require('express');
const app = new express();

app.use(express.static('static_files'))

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})
