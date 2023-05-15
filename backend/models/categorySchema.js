const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  category_image: String
},{
  timestamp : true
})

module.exports = mongoose.model('Category', categorySchema);
