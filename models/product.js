var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name	: { type:String, unique:true },
    price	: Number,
    stock	: { type:Number },
    available : { type:Boolean, default:false },
    date 	: { type:Date, default:Date.now }
});

var Product = mongoose.model('Product', productSchema);