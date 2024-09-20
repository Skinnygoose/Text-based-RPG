const mongoose = require('mongoose');

const questionCardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }], // Array of options
  correctAnswer: { type: String, required: true }, // The correct answer
  chapter: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const QuestionCard = mongoose.model('QuestionCard', questionCardSchema);

module.exports = QuestionCard;
