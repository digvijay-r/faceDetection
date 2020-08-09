/*
 * File: app.js
 * Project: facedetection
 * File Created: Sunday, 9th August 2020 1:05:18 pm
 * Author: Digvijay Rathore (rathore.digvijay10@gmail.com)
 */

var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});