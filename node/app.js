var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('this is hoe page');
});

app.get('/contact',function(req,res){
    res.send('contact us');
});

app.get('/profile/:id',function(req,res){
    res.send('u are viewing the profile with id'+req.params.id);
});
app.listen(3000);