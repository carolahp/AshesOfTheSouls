var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var mysql = require('mysql');

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0281BHv1Hi^!",
  database: "ashes"
});

// index page
app.get('/', function(req, res) {

    res.render('index.ejs');
      
});

// about page
app.get('/shop', function(req, res) {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("SELECT * FROM Product p JOIN Media m ON m.idProduct=p.idProduct WHERE m.position = 1", function (err, result, fields) {
            connection.release();
            if (err) throw err;
            console.log(result);
            var jsonProducts = JSON.stringify(result);
            res.render('shop.ejs',{ jsonProducts:jsonProducts });
        });
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');
