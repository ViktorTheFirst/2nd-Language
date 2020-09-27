const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  soundLevel: {
    type: Number,
    required: false,
    default: 1,
  },
  wordLevel: {
    type: Number,
    required: false,
    default: 1,
  },
  sentenceLevel: {
    type: Number,
    required: false,
    default: 1,
  },
  storyLevel: {
    type: Number,
    required: false,
    default: 1,
  },
});

module.exports = mongoose.model("Progress", ProgressSchema);
