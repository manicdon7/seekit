// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();
// const JWT_SECRET = 'seekit'; // Use environment variables for security

// // User Registration
// router.post('/register', async (req, res) => {
//   const { gmail, password } = req.body;

//   if (!gmail || !password) {
//     return res.status(400).json({ message: 'Please provide both email and password.' });
//   }

//   try {
//     const existingUser = await User.findOne({ gmail });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ gmail, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error.' });
//   }
// });

// // User Login
// router.post('/login', async (req, res) => {
//   const { gmail, password } = req.body;

//   if (!gmail || !password) {
//     return res.status(400).json({ message: 'Please provide both email and password.' });
//   }

//   try {
//     const user = await User.findOne({ gmail });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ message: 'Login successful.', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error.' });
//   }
// });

// module.exports = router;
