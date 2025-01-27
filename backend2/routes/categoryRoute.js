const express=require("express");
const { createCategory } = require("../controllers/CategoryController");

const router=express.Router();

router.post('/category',createCategory)

module.exports=router;