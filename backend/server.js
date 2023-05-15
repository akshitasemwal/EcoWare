//jshint esversion:6

const express= require ("express");
const mongoose = require('mongoose');
const cors = require('cors');
const Category = require("./models/categorySchema")
const Subcategory = require("./models/subcategorySchema")
const Group = require("./models/groupSchema");
const Product = require("./models/productSchema");
const Brand = require("./models/brandSchema");

const app= express();
app.use(cors());

const uri = 'mongodb+srv://anshul93999:3V81bxUV6OfnvUvK@plypicker-testing.lwplrul.mongodb.net/plypicker';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("connection successful!")
});

console.log("Hello");

app.get('/products', async(req, res) => {
    console.log("hello");

    const products = await Product.find({}).limit(30)
    .populate("brand").populate("group").populate("subcategory").populate("category");
    // console.log(products);
    res.send(products);
});

app.get('/getproductby', async (req, res) => {
  const { subcat } = req.query;
  // console.log(subcat);

    let products;
    const subcategory = await Subcategory.findOne({ Sub_Category_name: subcat });
    products = await Product.find({ subcategory: subcategory._id }).populate("brand").populate("group").populate("subcategory").populate("category");
    // console.log(products);
    res.send(products);
});

  app.get("/", (req, res) => {
    res.send("Hello, world! \n Welcome to EcoWare!");
  });

app.listen(3001, function(){
  console.log("Server started on channel 3001");
});
