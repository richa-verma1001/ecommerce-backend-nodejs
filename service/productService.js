const Product = require('../model/productModel');

class ProductService {

 async createProduct(productData){
  const newProduct = new Product(productData);
  return await newProduct.save();
 }

 async deleteProduct(productId){
  return await Product.findByIdAndDelete(productId);
 }

 async updateProduct(productId, updatedData){
  return await Product.findByIdAndUpdate(productId, updatedData);
 }

 async createProducts (productArrData){
  return await Product.insertMany(productArrData);
 }

 async getProducts() {
  console.log('Get all products');
  return await Product.find();
 }

 async getProductById(productId){
  return await Product.findById(productId);
 }

 async getProductsForCategory(categoryName){
  console.log(`categoryName: ${categoryName}`);
  return await Product.find({category: categoryName});
 }

 async deleteProducts(condition){
  return await Product.deleteMany(condition);
 }

}

module.exports = new ProductService();