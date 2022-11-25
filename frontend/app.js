var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

// index page
app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/shop', function (req, res) {
  fetch('http://localhost:4000/products').then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(response => {
      res.render('shop.ejs', { json: response.data });
    }));
});

app.get('/product', function (req, res) {
  fetch('http://localhost:4000/product').then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(response => {
      // res.render('shop.ejs', { json: response.data });
      console.log(response.data);
    }));
});


app.listen(8080);
console.log('Server is listening on port 8080');
