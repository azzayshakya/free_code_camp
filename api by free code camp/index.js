const express = require('express');
const app= express();
require('./db')
const PORT=1000;
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`your appp is running at the `,{PORT})
})