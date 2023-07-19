// models/Thought.js
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  // Add other thought-related fields here
  reactions: [{ type: String }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
