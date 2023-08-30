const Post = require('../models/Post');
const User = require('../models/User');
const Follow = require('../models/Follow');

const postController = {
  createPost: async (req, res) => {
    try {
      const { userId, content } = req.body;
      const post = new Post({ user: userId, content });
      await post.save();
      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getPostsByUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const posts = await Post.find({ user: userId });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostsByFollowedUsers: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const follows = await Follow.find({ follower: userId }).select('following');
      const followedUserIds = follows.map(follow => follow.following);
      const posts = await Post.find({ user: { $in: followedUserIds } });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Add more controller methods as needed
};

module.exports = postController;
