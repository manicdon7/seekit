const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors("https://seekit.vercel.app/"));
app.use(express.json());

// "https://seekit.vercel.app/",

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const foundItemsRoute = require('./routes/founditemsroute');
const postsRoute = require('./routes/allposts');
const lostItemsRoute = require('./routes/lostitemsroute');
const postDetailsRoute = require('./routes/allposts');

app.use('/api/found-items', foundItemsRoute);
app.use('/api/posts', postsRoute);
app.use('/api/lost-items', lostItemsRoute);
app.use('/api/posts', postDetailsRoute);

// Home route
app.get('/', (req, res) => {
  res.send('Server is working!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
