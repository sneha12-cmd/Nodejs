var express=require('express');
var app=express();
var shoppingcart=require('./controllers/shoppingcart');

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
shoppingcart(app);

app.listen(3000);
console.log('listening to port 3000');