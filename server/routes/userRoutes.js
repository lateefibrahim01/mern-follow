const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/:userId', userController.getUserProfile);
router.put('/:userId', userController.updateUserProfile);

module.exports = router;
