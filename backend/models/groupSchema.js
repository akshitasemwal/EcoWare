const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Group_name: String,
  Sub_Category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Subcategory"
  },
  Category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Category"
  }
},{
  timestamp : true
})

module.exports = mongoose.model("Group", groupSchema);
