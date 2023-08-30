const User = require('../models/User');

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUserProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const updates = req.body;
      const user = await User.findByIdAndUpdate(userId, updates, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Add more controller methods as needed
};

module.exports = userController;
