const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const events_schema = new Schema({
    event_name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    event_description:{
        type:String,
        default:''
    },
    event_price:{
        type:Number,
        required:true,
    },
    event_image:{
        type:String,
        trim:true,
        default:''
    },
    timestamp: { type: Date, default: Date.now },
})


module.exports = mongoose.model('Event',events_schema);