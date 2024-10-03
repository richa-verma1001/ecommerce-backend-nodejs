const express = require('express');
const router = new express.Router();
const UserController = require('../controller/userController');

router.get('/api/users', UserController.getUsers);
router.get('/api/user/:id', UserController.getUserById);

router.post('/api/user', UserController.postUser);

router.delete('/api/user/:id', UserController.deleteUser);

module.exports = router;