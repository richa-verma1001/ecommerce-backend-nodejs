const fs = require('fs');
const ProductController = require('./controller/productController');

const productList = JSON.parse(fs.readFileSync(`${__dirname}/data/productData.js`));
console.log(productList);
ProductController.postProducts(productList);