// routes/foundItems.js
const express = require('express');
const FoundItem = require('../models/founditems'); // Adjusted model filename

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const foundItems = await FoundItem.find();
      res.json(foundItems);
    } catch (error) {
      res.status(500).json({ message: 'Server error: ' + error.message });
    }
  });

router.post('/', async (req, res) => {
  const { itemName, time, place, category, color, description, imageURL, phone, address, gmail, founderEmail } = req.body;

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

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
