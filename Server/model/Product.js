const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productid: {
    type: ObjectId,
    required: true,
  
  },
  productName: {
    type: String,
    required: true,
    
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;