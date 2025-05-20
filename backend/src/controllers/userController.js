const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    console.log('REGISTER BODY:', req.body);
    const { username, email, password } = req.body || {};
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'Username, email and password are required.' });
    }
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        // Create a new user
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        });
    }
});

// User login
router.post('/login', async (req, res) => {
    console.log('LOGIN BODY:', req.body);
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }

        // Compare passwords
        if (user.password !== password) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: user
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        });
    }
});

module.exports = router;