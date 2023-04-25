const express = require("express");
const app = express.Router();
const { User } = require("../db");
const { isLoggedIn } = require("./middleware");

// /api/cart
app.get("/", isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.user);
    const cart = await req.user.getCart();

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

app.post("/", isLoggedIn, async (req, res, next) => {
  const { product, quantity } = req.body;
  try {
    const cart = await req.user.addToCart({ product, quantity });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
