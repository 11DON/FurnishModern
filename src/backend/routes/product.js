const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//✅ GET ALL PRODUCTS

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const skip = (page - 1) * limit;

    // shuffle the collection first
    const products = await Product.aggregate([
      { $sample: { size: 1000 } }, // randomize up to N items (adjust N)
      { $skip: skip },
      { $limit: limit },
    ]);

    const total = await Product.countDocuments();

    res.json({
      products,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});



// ✅ fetch Limited Number of Products

router.get("/limit/:count",async (req,res)=>{
  try {
    const count = parseInt(req.params.count)
    const products = await Product.find().limit(count);
    res.json(products);
  } catch (error) {
    res.status(500).json({error:"Server error"})
  }
})


//✅ Fetch random Products
router.get("/random/:count", async (req, res) => {
  try {
    const count = parseInt(req.params.count) || 5;
    const products = await Product.aggregate([{ $sample: { size: count } }]);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
})
// -------------------------------
// FETCH BY CATEGORY
// -------------------------------
router.get("/category/:name",async (req,res)=>{
  try {
    const products = await Product.find ({category:req.params.name});
    res.json(products);
  } catch (error) {
    res.status(500).json({error:"Server error"})
  }
})
// -------------------------------
// FETCH RANDOM PRODUCTS (specific number) FOR ALL PRODUCTS
// -------------------------------
let cachedRandom=null;
let cacheTime = null;
router.get("/random/:count",async(req,res) => {
  try {
    const count = parseInt(req.params.count) ||5;

    if (cachedRandom&& cacheTime && Date.now() -cacheTime < 3600000){
      return res.json(cachedRandom);
    }
    const products = await Product.aggregate([{$sample: {size:count}}]);
    cachedRandom = products;
    cacheTime = Date.now();
    res.json(products);
  } catch (error) {
    res.status(500).json ({error:"Server error"})
  }
})
// -------------------------------
// FETCH RANDOM PRODUCTS (specific number) FOR TRENDING PRODUCTS
// -------------------------------

router.get("/random/:count",async(req,res) => {
  try {
    const count = parseInt(req.params.count) ||5;

    if (cachedRandom&& cacheTime && Date.now() -cacheTime < 3600000){
      return res.json(cachedRandom);
    }
    const products = await Product.aggregate([{$sample: {size:count}}]);
    cachedRandom = products;
    cacheTime = Date.now();
    res.json(products);
  } catch (error) {
    res.status(500).json ({error:"Server error"})
  }
})



module.exports = router;