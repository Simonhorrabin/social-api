// routes/thoughtRoutes.js
const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');

// Define routes for thoughts
// Example: GET /api/thoughts
router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find().populate('userId', 'username');
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching thoughts', error });
  }
});

// Add other thought routes (POST, PUT, DELETE) here

module.exports = router;
