var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.body)
  res.send('lol');
});

app.listen(8000, function () {
  console.log('Express');
});