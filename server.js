var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.body)
  res.send('Chocapic');
});

app.listen(8972, function () {
  console.log('Express');
});