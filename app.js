const express = require('express')
const serverless = require('serverless-http')

const app = express()
const path = require('path');
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', '/homepage.html'));
});

app.get('/dataset', function (req, res) {
    res.sendFile(path.join(__dirname, './public', '/secondPage.html'));
});

app.get('/dataset/badge', function (req, res) {
    res.sendFile(path.join(__dirname, './public', '/table.html'));
});

app.get('/movement',function(req,res){
    res.sendFile(path.join(__dirname, './public', '/movement.html'));
});

app.get('/voice',function(req,res){
    res.sendFile(path.join(__dirname, './public', '/voice.html'));
});

module.exports.handler = serverless(app);