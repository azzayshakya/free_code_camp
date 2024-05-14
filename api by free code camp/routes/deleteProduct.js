const express = require("express");
const router  = express.Router();
const Product =require("../model/Product")
router.get("/",async()=>{

    try{
        const allproducts= await Product.find({});
        res.status(201).json({success:true , message:"your all products", allproducts})
    }
    catch(error){
        if(error.name=='ValidationError')
        {
            res.status(400).json({ success: false, message: "Validation error", error: error.message });  
        }
        else{
            res.status(400).json({ success: false, message: "Validation error", error: error.message });
        }
    }

})


module.exports= router;