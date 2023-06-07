const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Track user logins
router.get('/logins', async (req, res) => {
  try {
    const users = await User.find({}, 'username lastLogin');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Track posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;