// routes/foundItems.js
const express = require('express');
const FoundItem = require('../models/founditems'); // Adjusted model filename

const router = express.Router();

router.post('/', async (req, res) => {
  const { itemName, time, place, category, color, description, imageURL, phone, address, gmail } = req.body;

  try {
    const newItem = new FoundItem({
      itemName,
      time,
      place,
      category,
      color,
      description,
      imageURL, // Ensure imageURL is included here
      phone,
      address,
      gmail
    });

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
