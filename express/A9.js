var express=require('express');
var app=express();
const fs=require('fs');
app.use(express.json());
var path=require('path');
const data=require(path.join(__dirname,"A9.json"));
const obj=JSON.parse(JSON.stringify(data));
console.log(obj);

app.get('/books',function(req,res){
    res.send(obj);
});



app.listen(3000);