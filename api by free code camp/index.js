const express = require('express');
const app= express();
const bodyParser = require('body-parser')
require('./db')
const PORT=1000;
const Product = require('./model/Product') 


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())


// const cors = require('cors');
// app.use(cors({
//     origin: '*',
//     credentials: true, 
//   }));

app.use(require('./routes/deleteProduct'))



app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get('/api/getProduct',async(req,res)=>{
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

app.post('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, message: "Product has been successfully created", product });
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ success: false, message: "Validation error", error: error.message });
        } else {
            console.error(error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
});

app.listen(PORT,()=>{
    console.log(`your appp is running at the PORT:${PORT} `)
})