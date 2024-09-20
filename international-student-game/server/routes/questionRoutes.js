const express = require('express');
const router = express.Router();
const QuestionCard = require('../models/questionCard'); // Import the QuestionCard model

// Route to create a new question card
router.post('/', async (req, res) => {
  try {
    const newCard = new QuestionCard(req.body); // Create a new instance
    await newCard.save(); // Save it to the database
    res.status(201).json(newCard); // Respond with the created question card
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

// Route to get all question cards
router.get('/', async (req, res) => {
  try {
    const cards = await QuestionCard.find(); // Retrieve all question cards
    res.json(cards); // Respond with the question cards
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

// Optionally, you can add a route to get a specific question card by ID
router.get('/:id', async (req, res) => {
  try {
    const card = await QuestionCard.findById(req.params.id); // Find card by ID
    if (!card) {
      return res.status(404).json({ message: 'Card not found' }); // Handle not found
    }
    res.json(card); // Respond with the found question card
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

module.exports = router; // Export the router
