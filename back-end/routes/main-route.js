const express = require("express");
const mainRouter = express.Router();
const {allProducts,productDetails,viewCategories} = require('../controllers/main-controller')

mainRouter.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

// View all products
mainRouter.get("/allProducts", allProducts);

// View a specific product's details
mainRouter.get("/product/:id", productDetails);

// View all product categories
mainRouter.get("/categories", viewCategories);

module.exports = mainRouter;
