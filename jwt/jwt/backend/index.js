// app.js
const express = require('express');
const connectDb = require('./db');
require('dotenv').config();
const authenticateToken = require('./middleware/authMid');

const app = express();

// Connect to the database
connectDb();

// Use CORS to allow all origins
const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true,
}));

app.use(express.json());

// Routes
app.use('/auth/', require('./Routes/Login'));
app.use('/auth/', require('./Routes/SignUp'));
app.use( require('./Routes/RefreshToken'));
app.use('/api', authenticateToken, require('./Routes/YourDeals')); // Added authenticateToken middleware here

app.get("/", (req, res) => {
    res.send("Hey Ajju, how are you? This is your zobs website");
});

// Start the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
