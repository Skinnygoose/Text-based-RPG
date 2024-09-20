const express = require('express');
const connectDB = require('./config/db'); // Database connection
const storyRoutes = require('./routes/storyRoutes'); // Story routes
const questionRoutes = require('./routes/questionRoutes'); // Question routes

const app = express();
connectDB(); // Connect to MongoDB

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api/stories', storyRoutes); // Story routes
app.use('/api/cards', questionRoutes); // Question card routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
