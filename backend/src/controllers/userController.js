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

// Update username
router.put('/update-username', async (req, res) => {
    const { email, password, newUsername } = req.body || {};
    if (!email || !password || !newUsername) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email, password and new username are required.' 
        });
    }

    try {
        // Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Verify password
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check if new username is already taken
        const existingUser = await User.findOne({ username: newUsername });
        if (existingUser && existingUser._id.toString() !== user._id.toString()) {
            return res.status(400).json({
                success: false,
                message: 'Username is already taken'
            });
        }

        // Update the username
        user.username = newUsername;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Username updated successfully',
            data: {
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Update username error:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        });
    }
});

// Delete user account
router.delete('/delete-account', async (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required for account deletion.' });
    }

    try {
        // Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Verify password
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Delete the user
        await User.deleteOne({ _id: user._id });

        res.status(200).json({
            success: true,
            message: 'Account deleted successfully'
        });
    } catch (error) {
        console.error('Delete account error:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        });
    }
});

module.exports = router;