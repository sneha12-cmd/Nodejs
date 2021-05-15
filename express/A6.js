var express=require('express');

var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,"public")));

    
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,"public","A6.html"));
  });

  app.listen(4000);