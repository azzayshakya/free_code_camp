// routes/YourDeals.js
const express = require('express');
const router = express.Router();
const users = require('../models/User');
const authenticateToken= require("../middleware/authMid")

router.get('/YourDeals', async (req, res) => { 
    try {
        const user = await users.find();
        console.log(user);

        return res.status(201).json({ success: true, message: 'data is here', data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
