var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0281BHv1Hi^#",
  database: "ashes"
});



// index page
app.get('/', function(req, res) {

    res.render('index.ejs');
      
});

// about page
var obj = {};
app.get('/shop', function(req, res) {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM Product", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            
            res.render('shop.ejs',{ sql:result });
        });
    });
    
});

app.listen(8080);
console.log('Server is listening on port 8080');
