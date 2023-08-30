const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // Add other fields as needed
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
