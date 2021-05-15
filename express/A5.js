var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
 app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/A5.html');
});


app.post('/form',urlencodedParser,function(req,res){
  console.log(req.body);
  //console.log(req.body.key);
  var Reverse=req.body.str.split("").reverse("").join("");
  console.log(Reverse);
  res.render("forms",{data:req.body})
});
app.listen(3000);