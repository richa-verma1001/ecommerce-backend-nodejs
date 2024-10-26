const fs = require('fs');
const ProductController = require('./controller/productController');
//const CategoryController = require('./controller/categoryController');

const productList = JSON.parse(fs.readFileSync(`${__dirname}/data/productData.js`));
ProductController.postProducts(productList);

// const categoryList = JSON.parse(fs.readFileSync(`${__dirname}/data/categoryData.js`));
// CategoryController.postCategories(categoryList);
