const productService = require('../service/productService');

class ProductController {

  async postProduct(req, res){
    console.log(req.body);
    try {
      const product = await productService.createProduct(req.body);
      res.status(200).send(product);
    }catch(e){
      res.status(401).send(e);
    }    
  }

  async postProducts(jsonData){
    console.log(jsonData);
    try {
      const products = await productService.createProducts(jsonData);
      consle.log(products);
    }catch(e){
      console.log(e);
    }    
  }

  async getProducts(req, res){
    try {
      const products = await productService.getProducts();
      res.status(200).send(products);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async getProductById(req, res){
    const id = req.params.id;
    const product = await productService.getProductById(id);
      res.status(200).send(product);
    }catch(e){
      res.status(400).send(e);
    }
}


module.exports = new ProductController();