const mongoose = require("mongoose");

mongoose.model('inventory',{
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
});