const categoryService = require('../service/categoryService');

class CategoryController {
  async postCategory(req, res){
    const category = req.body;
    try{
      const result = await categoryService.createCategory(category);
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async getCategoryById(req, res){
    const id = req.params.id;
    try{
      const category = await categoryService.getCategory(id);
      res.status(200).send(category);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async getCategories(req, res){
    try{
      const categories = await categoryService.getCategories();
      res.status(200).send(categories);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async deleteCategory(req, res){
    const id = req.params.id;
    try{
      const result = categoryService.removeCategory(id);
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async updateCategory(req, res){
    const id = req.params.id;
    try{
      const result = categoryService.updateCategory(id);
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(e);
    }
  }
}

module.exports = new CategoryController();