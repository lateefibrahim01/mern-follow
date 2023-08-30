const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/create', postController.createPost);
router.get('/user/:userId', postController.getPostsByUser);
router.get('/feed/:userId', postController.getPostsByFollowedUsers);

module.exports = router;
