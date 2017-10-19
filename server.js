// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
const fs = require('fs');

mongoose.connect('mongodb://' + process.env.USER + ':' + process.env.PASS + '@ds025239.mlab.com:25239/fccbackend', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db motherfuckerrrrruusianasshole");
  app.post("/dbadd", function(req, res, next){
    
    next();
  }).post("/dbedit", function(req, res, next){
    
    next();
  }).post("/dbremove", function (req, res){
    
  })
});
//need to start adding stuff to db :)
// http://expressjs.com/en/starter/static-files.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/admin", function (req, res) {
  if (req.body.username == process.env.USER && req.body.password == process.env.PASS)
    {
      res.sendFile(__dirname + '/views/admin.html');
    }
  else {
    res.sendFile(__dirname + '/views/failed.html');
  }
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
