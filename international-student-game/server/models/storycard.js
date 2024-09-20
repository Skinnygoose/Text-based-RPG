const mongoose = require('mongoose');

const storyCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  chapter: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const StoryCard = mongoose.model('StoryCard', storyCardSchema);

module.exports = StoryCard;
