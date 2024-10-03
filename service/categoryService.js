const Category = require('../model/category')

class CategoryService {
  async getCategories(){
    return await Category.find();
  }

  async getCategoryById(id){
    return await Category.findById(id);
  }

  async createCategory(data){
    const newCategory = new Category(data);
    return await newCategory.save();
  }

  async createCategories(jsonData){
    return await Category.insertMany(jsonData);
  }

  async removeCategory(id){
    return await Category.findByIdAndDelete(id);
  }

  async updateCategory(id, data){
  return await Category.findByIdAndUpdate(id, data);
 }

}
module.exports = new CategoryService();