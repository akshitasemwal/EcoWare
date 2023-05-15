const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Brand_name: String,
  Brand_image: String,
  Group: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group"
  }],
  Category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }],
  SubCategory : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Subcategory"
  }]
},{
  timestamp : true
})

module.exports = mongoose.model('Brand', brandSchema);
