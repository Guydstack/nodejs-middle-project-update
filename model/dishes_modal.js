const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dishes_schema = new Schema({
    product_name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    product_description:{
        type:String,
        default:''
    },
    product_price:{
        type:Number,
        required:true,
    },
    product_image:{
        type:String,
        trim:true,
        default:''
    },
    timestamp: { type: Date, default: Date.now },
})


module.exports = mongoose.model('Dishes',dishes_schema);