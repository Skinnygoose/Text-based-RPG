require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware to parse JSON and allow cross-origin requests
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the hidden password from the environment variable
const mongoURI = process.env.MONGODB_URI; // Use the environment variable
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a basic schema for user credentials or any other data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // This can be anything depending on what you're storing
});

const User = mongoose.model('User', userSchema);

// API route to create (register) a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body; // Extract data from frontend request body
  const newUser = new User({ username, password }); // Create new user
  try {
    await newUser.save(); // Save user to MongoDB
    res.status(201).json(newUser); // Respond with newly created user
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// API route to get all users (or any other data you want to fetch)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Find all users in the database
    res.status(200).json(users); // Respond with the list of users
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
