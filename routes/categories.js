const express = require('express');
const router = new express.Router();
const Category = require('../model/category');

router.post('/api/category', (req, res) => {
  console.log(req.body);
  const newCategory = new Category(req.body);

  newCategory.save().then((result) => {
    res.status(200).send(result);
  }).catch(() => {
    res.status(401).send(err);
  });
});

router.get('/api/category', (req, res) => {
  Category.find().then((result) => {
    result ? res.status(200).send(result) : res.status(200).send([]);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.get('/api/category/:id', (req, res) => {
  const id = req.params.id;

  Category.findById({_id: id}).then((result) => {
    result ? res.status(200).send(result) : res.status(200).send([]);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.put('/api/category', (req, res) => {
  const {name} = req.body;

  
})

module.exports = router;

