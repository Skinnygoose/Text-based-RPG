const express = require('express');
const router = express.Router();
const StoryCard = require('../models/storycard'); // Import the StoryCard model

// Route to create a new story card
router.post('/', async (req, res) => {
  try {
    const newStory = new StoryCard(req.body); // Create a new instance
    await newStory.save(); // Save it to the database
    res.status(201).json(newStory); // Respond with the created story card
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

// Route to get all story cards
router.get('/', async (req, res) => {
  try {
    const stories = await StoryCard.find(); // Retrieve all stories
    res.json(stories); // Respond with the stories
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

// Route to get a specific story card by ID
router.get('/:id', async (req, res) => {
  try {
    const story = await StoryCard.findById(req.params.id); // Find story by ID
    if (!story) {
      return res.status(404).json({ message: 'Story not found' }); // Handle not found
    }
    res.json(story); // Respond with the found story card
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

module.exports = router; // Export the router
