const express = require('express');
const FoundItem = require('../models/founditems');

const router = express.Router();

// Route to get all found items
router.get('/', async (req, res) => {
  try {
    const foundItems = await FoundItem.find();
    res.json(foundItems);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// Route to add a new found item
router.post('/', async (req, res) => {
  const { itemName, time, place, category, color, description, imageURL, phone, address, gmail, founderEmail } = req.body;

  console.log(itemName, time, place, category, color, description, imageURL, phone, address, gmail, founderEmail);
  try {
    const newItem = new FoundItem({
      itemName,
      time,
      place,
      category,
      color,
      description,
      imageURL,
      phone,
      address,
      gmail,
      founderEmail
    });

    const savedItem = await newItem.save();
    console.log(savedItem);
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: 'Error saving item: ' + error.message });
  }
});

//founder email finding api
router.post('/', async (req, res) => {
  try {
    const { userEmail } = req.body;
    if (!userEmail) {
      return res.status(400).json({ error: 'User email is required.' });
    }

    const posts = await FoundItem.find({ founderEmail: userEmail });
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});

module.exports = router;
