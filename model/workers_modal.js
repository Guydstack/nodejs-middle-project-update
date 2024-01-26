const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workers_Schema = new Schema({
    user_name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    user_email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    user_password:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:String,
        default: "regular"
    },
    premission:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('Workers',workers_Schema);

