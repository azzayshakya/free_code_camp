const express = require('express');
const router = express.Router();
const users = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = "mynameisajayshakyaIamFrommyown";
const refreshTokenSecret = "anotherSecretForRefreshToken";
let refreshTokens = [];
router.post('/LogIn', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await users.findOne({ email });
        if (!user) {
            return res.status(500).json({ success: false, message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(500).json({ success: false, message: 'Wrong Password' });
        }

        const jwtData = { id: user.id };
        const accessToken = jwt.sign(jwtData, jwtSecret, { expiresIn: '1m' }); // Set short expiry for testing
        const refreshToken = jwt.sign(jwtData, refreshTokenSecret);
        refreshTokens.push(refreshToken);

        console.log(`Access token generated: ${accessToken}`);
        console.log(`Refresh token generated: ${refreshToken}`);

        return res.status(201).json({ success: true, message: 'Login successfully', accessToken, refreshToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


module.exports = router;
