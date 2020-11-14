const express = require("express");
const mainRouter = express.Router();
const {viewAllProducts,productDetails,viewCategories,viewProducts,searchProducts,
  discounted,newProducts,customerOrders,addOrder,addSoldItem} = require('../controllers/main-controller')

// View all products
mainRouter.get("/Products", viewAllProducts);

// View a specific product's details
mainRouter.get("/product/:id", productDetails);

// View all product categories
mainRouter.get("/categories", viewCategories);

// View products by category
mainRouter.get("/categories/:i",viewProducts);

// Search for products
mainRouter.get("/searchProducts/:i",searchProducts);

// View discounted products
mainRouter.get("/discounted",discounted);

// View latest products added
mainRouter.get("/newProducts/:i",newProducts);

// View my order history
mainRouter.get("/orders/:i",customerOrders);

// Add order 
mainRouter.post("/order/:i",addOrder);

// Add add Sold Item 
mainRouter.post("/SoldItem",addSoldItem);

module.exports = mainRouter;
