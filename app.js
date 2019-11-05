var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile('hello world');
});

// app.get('/dataSet', function (req, res) {
//     res.send('hello world');
//   });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sever has started")
});