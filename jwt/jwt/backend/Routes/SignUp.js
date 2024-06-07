const express = require("express");
const router = express.Router();
const users = require("../models/User");
const bcrypt = require('bcrypt');


router.post("/SignUp", async (req, res) => {
    try {
        console.log("u are here")
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }
        const alreadyuser=users.find({email});
        if(alreadyuser){
            return res.status(400).json({success:false,message:"You already have the account with this email"})
        }
        
        const salt = await bcrypt.genSalt(10);
        let HashedPassword = await bcrypt.hash(req.body.password, salt);
        const Lowercaseemail = email.toLowerCase();

        await users.create({
            name,
            email:Lowercaseemail,
            password:HashedPassword,
        });

        res.status(201).json({ success: true, message: "Signed up successfully" });
    } catch (error) {
        console.log("SignUp route error", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
