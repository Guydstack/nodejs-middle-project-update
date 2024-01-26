const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orders_schema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'Clients',
        require:true,
    },
    total_price:{
        type:Number,
        required:true,
        min:1
    },
    products:[
            {
                type:mongoose.Types.ObjectId,
                ref:'Dishes',
                require:true,
                timestamp: { type: Date, default: Date.now }
            }
    ]
})


module.exports = mongoose.model('Orders',orders_schema);





            // quantity:{
            //     type:Number,
            //     require:true,
            //     min:1
            // },
            // RTP:{
            //     type:Number,
            //     require:true,
            //     min:1
            // },