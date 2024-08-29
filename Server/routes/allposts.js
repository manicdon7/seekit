const express = require('express');
const mongoose = require('mongoose');
const FoundItem = require('../models/founditems');
const { ObjectId } = mongoose.Types;


const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid post ID' });
  }

  try {
      const post = await FoundItem.findById(id);
      if (!post) {
          return res.status(404).json({ error: 'Post not found' });
      }
      res.json({ post });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});


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
