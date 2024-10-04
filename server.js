const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the hidden password from the environment variable
require('dotenv').config(); // Load environment variables from .env
const mongoURI = process.env.MONGODB_URI; // Use the environment variable

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if connected to MongoDB
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
});

// Example route
app.get('/', (req, res) => {
  res.send('MongoDB connection check!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
