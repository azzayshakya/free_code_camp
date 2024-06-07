// middleware/authenticateToken.js
const jwt = require('jsonwebtoken');
const jwtSecret = "mynameisajayshakyaIamFrommyown";

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        console.log('Token not found');
        return res.sendStatus(401); 
    }

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            console.log('Token verification failed:', err);
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
