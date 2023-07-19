// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Define routes for users
// Example: GET /api/users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().populate('friends', 'username');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// Add other user routes (POST, PUT, DELETE) here

module.exports = router;
