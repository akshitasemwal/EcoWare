const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product_name: String,
  product_id: String,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    default: null
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    default: null
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    default: null
  },
});

module.exports = mongoose.model('Product', productSchema);
