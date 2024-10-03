const express = require('express');
const router = new express.Router();
const CategoryController = require('../controller/categoryController');

router.post('/api/category', CategoryController.postCategory);
router.get('/api/category', CategoryController.getCategories);
router.get('/api/category/:id', CategoryController.getCategoryById);

module.exports = router;

