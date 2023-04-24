const express = require("express");
const app = express.Router();
const { Product } = require("../db");

// /api/products
app.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();

    res.send(products);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
