var express=require('express');
var strftime=require('strftime');
var app=express();

app.get('/',function(req,res){
    res.end('hello world!');
});
//var date=new Date();
//date.toISOString();
app.get('/time',function(req,res){
    res.end(strftime('%F %T'));
    //res.end(date.toISOString());
});

app.listen(3000);