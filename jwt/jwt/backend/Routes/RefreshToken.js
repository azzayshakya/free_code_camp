const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const refreshTokenSecret = "anotherSecretForRefreshToken";
let refreshTokens = []; // In production, store refresh tokens in a database or secure store

router.post('/refreshToken', (req, res) => {
    const { token } = req.body;
    console.log(token,"token at endpoint")

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    if (!refreshTokens.includes(token)) {
        return res.status(401).json({ success: false, message: 'Invalid refresh token' });
    }

    try {
        const user = jwt.verify(token, refreshTokenSecret);
        const accessToken = jwt.sign({ id: user.id }, "mynameisajayshakyaIamFrommyown", { expiresIn: '1m' });

        
        return res.json({ success: true, accessToken });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ success: false, message: 'Invalid refresh token' });
    }
});

module.exports = router;
