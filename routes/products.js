const express = require('express');
const router = new express.Router();
const Product = require('../model/product');

router.post('/api/products', (req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);

  newProduct.save().then((result)=>{
    res.status(200).send(result);
  }).catch((err)=> {
    res.status(200).send(err);
  });
});

router.get('/api/products', (req, res) => {
  Product.find().then((result) => {
    result ? res.status(200).send(result) : res.status(200).send([]);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.get('/api/products/:id', (req, res) => {
  const id = req.params.id;

  Product.findById({_id: id}).then((result) => {
    result ? res.status(200).send(result) : res.status(200).send([]);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

module.exports = router;