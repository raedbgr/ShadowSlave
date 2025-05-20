require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const authRoute = require('./routes/auth_modules');
const characterRoute = require('./routes/character_modules');

// Connect to MongoDB
connectDB();
// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
app.use('/api/auth', authRoute);
app.use('/api/shadowslave/characters', characterRoute);
// Default Routes
app.get('/', (req, res) => {
res.send('Welcome to the API!');
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));