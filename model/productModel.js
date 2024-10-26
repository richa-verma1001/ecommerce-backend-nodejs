const mongoose = require('../db/connect');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  quantity: {
    type: Number,
    required: true, // Quantity is required
    min: 0, // Optional: you might want to prevent negative quantities
  },
  price: {
    type: Number, 
  },
  navtive_currency: {
    type: String,
  },
  category: {
    type: String,
  }, 
  imageUrl: {
    type: String, 
  }
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;