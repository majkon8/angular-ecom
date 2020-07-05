const Product = require("../models/product.model");

// GET ALL PRODUCTS
exports.findAll = (req, res) => {
  Product.find()
    .then(products => res.send(products))
    .catch(e => res.staus(400).send(e));
};

// GET ONE PRODUCT
exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(product => res.send(product))
    .catch(e => res.status(400).send(e));
};

// CREATE PRODUCT
exports.create = (req, res) => {
  const body = req.body;
  const newProduct = new Product(body);
  newProduct
    .save()
    .then(newProduct => res.send(newProduct))
    .catch(e => res.status(400).send(e));
};

exports.update = (req, res) => {
  Product.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
    .then(product => res.send(product))
    .catch(e => res.status(400).send(e));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then(product => res.send(product))
    .catch(e => res.status(400).send(e));
};
