const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const allowedOrigins = [
  'https://seekit.vercel.app',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

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
// const UserRoute = require('./routes/userroute');


app.use('/api/found-items', foundItemsRoute);
app.use('/api/posts', postsRoute);
app.use('/api/lost-items', lostItemsRoute);
// app.use('/api/user',UserRoute);

// Home route
app.get('/', (req, res) => {
  res.send('Server is working!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
