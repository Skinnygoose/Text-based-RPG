const mongoose = require('mongoose');

// Define the schema for question cards
const questionCardSchema = new mongoose.Schema({
  question: { type: String, required: true }, // The question text
  options: [
    {
      text: { type: String, required: true }, // Option text as string
      nextCardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card', required: true } // ObjectId of the next card
    }
  ], // Array of objects for options
  correctAnswer: { type: String, required: true }, // The correct answer text
  chapter: { type: Number, required: true }, // Chapter number
  createdAt: { type: Date, default: Date.now } // Automatically set creation date
});

const QuestionCard = mongoose.model('QuestionCard', questionCardSchema);

module.exports = QuestionCard;
