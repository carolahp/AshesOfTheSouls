var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('index.ejs');
});

// about page
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
