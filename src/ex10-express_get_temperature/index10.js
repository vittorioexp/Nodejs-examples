const express = require('express');
const app = express();
const port = 8080;

app.get(
    '/temperature/:location_code',
    function(req, res) {
        const var_location = req.params.location_code;
        weather.current(
            location,
            function(error, temp_f) {
                // ...
            }
        );
    }
);

const server = app.listen(
    port,
    function () {
        console.log('Listening on URL http://localhost:${port}');
    }
);