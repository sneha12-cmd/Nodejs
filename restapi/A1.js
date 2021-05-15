const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const app=express();
app.use(bodyparser.json());

require("./models/inventory");
const Inventory=mongoose.model("inventory");

const dbURI="mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Inventory";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

app.post('/inventory',(req,res)=>{
    var newitem= {
        name:req.body.name,
        quantity:req.body.quantity
    }
   
    var item=new Inventory(newitem);
    item.save().then(()=>{
        console.log("new item created");
    }).catch((err)=>
    {
        if(err){
            throw err;
        }
    })
    res.send("a new item created with success");
    });
//to get all items
app.get('/inventory',(req,res)=>{
    Inventory.find().then((items)=>{
        res.json(items);
    })
});

app.get('/inventory/:name',(req,res)=>{
    Inventory.findOne(req.body.name).then((items)=>{
        res.json(items);
    })
});

    app.listen(3003,()=>{
        console.log("listening to port");

    })