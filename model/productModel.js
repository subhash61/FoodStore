const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be less than zero'],
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
