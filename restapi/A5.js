const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const app=express();
app.use(bodyparser.json());

require("./models/inventory");
const Inventory=mongoose.model("inventory");

const dbURI="mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Inventory";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

/*app.put('/inventory/:id',function(req,res){
    Inventory.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
            Inventory.findOne({_id:req.params.id}).then(function(inven){
                res.send(inven);
            })
    })
});

app.get('/inventory',(req,res)=>{
    Inventory.find().then((items)=>{
        res.json(items);
    })
});

app.listen(3006,()=>{
    console.log("listening to port");

})*/