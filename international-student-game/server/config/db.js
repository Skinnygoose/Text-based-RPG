const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    // Use the connection URI from environment variables or hardcode for testing
    const MONGO_URI = process.env.MONGO_URI ;
    
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connectDB function for use in server.js
module.exports = connectDB;
