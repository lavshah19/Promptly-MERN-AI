const express=require("express");
const router=express.Router();
// const generateContent=require("../services/ai.service");
const {generateContentController}=require("../controller/ai.controller");

router.post("/generate",generateContentController);

module.exports=router;