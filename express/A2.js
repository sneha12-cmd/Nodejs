var express=require('express');
var app=express();

app.get('/year',function(req,res){
    const agec=req.query.age;
    res.send('You were born in'+" "+(2021-agec));
});



app.listen(3000);
