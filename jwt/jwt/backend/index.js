const express=require('express');
const connectDb = require('./db');
const port=1000;
const app= express();

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true, 
  }));
  

app.get("/",(req,res)=>{
    res.send("hey ajju how are you , this is your zobs website")
})

app.listen(1000,()=>{
    console.log("ur app is running")
})