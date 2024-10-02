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
    console.log('Get products api')
    console.log(req.query);
    const { category } = req.query;

    if(category && category !== ""){
      try{
        console.log('in get products for category try' + category);
        const products = await productService.getProductsForCategory(category);
        res.status(200).send(products);
      }catch(e){
        res.status(400).send(e);
      }
    }else{
      try{
        console.log('in get all products try');
        const products = await productService.getProducts();
        res.status(200).send(products);
      }catch(e){
        res.status(400).send(e);
      }
      
    }
  }

  async getProductById(req, res){
    const id = req.params.id;
    try {      
      const product = await productService.getProductById(id);
      res.status(200).send(product);
    }catch(e){
      res.status(400).send(e);
    }
  }

  async removeProduct(req, res){
    const id = req.params.id;
    console.log(id);
    try{      
      // const product = await this.getProductById(req, res);
      // const result = await product.deleteOne();
      const result = productService.deleteProduct(id);
      res.status(200).send(result);
    }catch(e){
      res.status(400).send(result);
    }
    
  }
}

module.exports = new ProductController();