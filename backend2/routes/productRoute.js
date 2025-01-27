const express=require("express");
const { createProduct,getCategoriesWithProducts } = require("../controllers/ProductController");

const router=express.Router();

router.post('/product',createProduct)
router.get('/categories-with-products', getCategoriesWithProducts);

module.exports=router;