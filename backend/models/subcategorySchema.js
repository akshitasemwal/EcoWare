const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Sub_Category_name: String,
  Category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Category"
  }
},{
  timestamp : true
})

module.exports = mongoose.model('Subcategory', subcategorySchema);
