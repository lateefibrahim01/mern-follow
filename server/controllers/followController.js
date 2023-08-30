const Follow = require('../models/Follow');
const User = require('../models/User');

const followController = {
  followUser: async (req, res) => {
    try {
      const { followerId, followingId } = req.body;

      // Check if both follower and following users exist
      const follower = await User.findById(followerId);
      const following = await User.findById(followingId);
      if (!follower || !following) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if the follow relationship already exists
      const existingFollow = await Follow.findOne({ follower: followerId, following: followingId });
      if (existingFollow) {
        return res.status(400).json({ message: 'Already following this user' });
      }

      // Create a new follow relationship
      const follow = new Follow({ follower: followerId, following: followingId });
      await follow.save();
      res.status(201).json({ message: 'Following user successfully', follow });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  unfollowUser: async (req, res) => {
    try {
      const { followerId, followingId } = req.body;

      // Check if the follow relationship exists
      const existingFollow = await Follow.findOneAndDelete({ follower: followerId, following: followingId });
      if (!existingFollow) {
        return res.status(404).json({ message: 'Follow relationship not found' });
      }

      res.status(200).json({ message: 'Unfollowed user successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Add more controller methods as needed
};

module.exports = followController;
