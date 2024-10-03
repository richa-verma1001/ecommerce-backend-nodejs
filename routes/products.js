const express = require('express');
const router = new express.Router();
const ProductController = require('../controller/productController');

// const fs = require('fs');
// const productList = JSON.parse(fs.readFileSync(`${__dirname}/../data/productData.js`));

router.post('/api/product', ProductController.postProduct);

router.get('/api/products', ProductController.getProducts);
router.get('/api/products/:id', ProductController.getProductById);

router.delete('/api/products/:id', ProductController.removeProduct);

module.exports = router;