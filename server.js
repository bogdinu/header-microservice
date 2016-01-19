'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();

/*var htmlDir = process.cwd()+"/public";

app.get('/', function (req, res) {
    res.sendFile(htmlDir + "/index.html");
});

*/

routes(app);

app.listen(8080, function () {
    console.log('Listening on port 8080...');
});