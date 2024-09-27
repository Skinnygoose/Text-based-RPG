const mongoose = require('mongoose');

const storyCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  chapter: { type: Number, required: true },
  type: { type: String, default: 'story', required: true },  // Define the type as 'story'
  nextCardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card', required: false },  // Refers to the next card (story or question)
  nextCardType: { type: String, enum: ['story', 'question'], required: false },  // Defines the next card's type
  createdAt: { type: Date, default: Date.now }
});

const StoryCard = mongoose.model('StoryCard', storyCardSchema);
module.exports = StoryCard;
