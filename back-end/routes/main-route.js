const express = require("express");
const mainRouter = express.Router();
const {viewAllProducts,productDetails,viewCategories,viewProducts,
  searchProducts,discounted,newProducts} = require('../controllers/main-controller')

mainRouter.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

// View all products
mainRouter.get("/Products", viewAllProducts);

// View a specific product's details
mainRouter.get("/product/:id", productDetails);

// View all product categories
mainRouter.get("/categories", viewCategories);

// View products by category
mainRouter.get("/products/:i",viewProducts);

// Search for products
mainRouter.get("/searchProducts/:i",searchProducts);

// View discounted products
mainRouter.get("/discounted",discounted);

// View latest products added
mainRouter.get("/newProducts/:i",newProducts);

module.exports = mainRouter;
