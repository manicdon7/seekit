const express = require('express');
const FoundItem = require('../models/founditems');

const router = express.Router();

// Get posts by user email
router.post('/', async (req, res) => {
  try {
    const { userEmail } = req.body;
    console.log(userEmail);
    if (!userEmail) {
      return res.status(400).json({ error: 'User email is required.' });
    }
    const posts = await FoundItem.find({ founderEmail: userEmail });
    console.log(posts);
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});

module.exports = router;
