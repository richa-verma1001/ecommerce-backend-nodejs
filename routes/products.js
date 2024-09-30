const express = require('express');
const router = new express.Router();
const fs = require('fs');
const ProductController = require('../controller/productController');
const Product = require('../model/productModel');

// const productList = JSON.parse(fs.readFileSync(`${__dirname}/../data/productData.js`));

router.post('/api/products', ProductController.postProduct);
router.get('/api/products', ProductController.getProducts);

router.get('/api/products/:id', ProductController.getProductById);

module.exports = router;