const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const { request } = require('express');

const app=express();
app.use(bodyparser.json());

require("./models/inventory");
const Inventory=mongoose.model("inventory");

const dbURI="mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Inventory";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

//app.put('/inventory',(req,res)=>{
    
    
    //Inventory.update({}).then((inven)=>
    //{
        //res.json(inven);
    //})
//});

app.put('/inventory/:id',(req,res)=>{
    Inventory.findOneAndUpdate({_id:req.params.id},req.body).then(()=>{
        Inventory.findOne({_id:req.params.id}).then(function(inven){
    res.json(inven);
        });
    });
});

app.listen(3004,()=>{
    console.log("listening to port 3004");
})
