const express = require('express');
const FoundItem = require('../models/founditems');

const router = express.Router();

router.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  console.log(postId);
  
  try {
    const post = await FoundItem.findById(postId);
    console.log(post);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
