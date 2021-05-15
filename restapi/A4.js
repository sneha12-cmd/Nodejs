const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const app=express();
app.use(bodyparser.json());

require("./models/inventory");
const Inventory=mongoose.model("inventory");

const dbURI="mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Inventory";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

app.delete('/inventory/:id',function(req,res){
    Inventory.findByIdAndRemove({_id:req.params.id}).then(function(inventory){
            res.send(inventory);
    })
});

app.get('/inventory',(req,res)=>{
    Inventory.find().then((items)=>{
        res.json(items);
    })
});

app.listen(3006,()=>{
    console.log("listening to port");

})