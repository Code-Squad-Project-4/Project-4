// const customersRouter = require("express").Router();
const express = require("express");
const customersRouter = express.Router();

const {viewAllProducts,productDetails,viewCategories,viewProducts,searchProducts}= require('../controllers/customers_controllers/products_controller')
const { discounted,newProducts,freeDelivery } = require('../controllers/customers_controllers/offers_controller') 
const {customerOrders, addOrder} = require('../controllers/customers_controllers/orders_controller')    
const {addSoldItem } = require('../controllers/customers_controllers/SoldItem_controller')
const {customerRating } = require('../controllers/customers_controllers/rating.controller')

// View all products
customersRouter.get("/products", viewAllProducts);

// View a specific product's details
customersRouter.get("/product/:id", productDetails);

// View all product categories
customersRouter.get("/categories", viewCategories);

// View products by category
customersRouter.get("/categories/:i", viewProducts);

// Search for products
customersRouter.get("/searchProducts/:i", searchProducts);

// View discounted products
customersRouter.get("/discounted", discounted);

// View latest products added
customersRouter.get("/newProducts/:i", newProducts);

// View my order history
customersRouter.get("/orders/:i", customerOrders);

// Add order 
customersRouter.post("/order/:i", addOrder);

// Add add Sold Item 
customersRouter.post("/SoldItem", addSoldItem);

// customers rating
customersRouter.post("/ratingSeller", customerRating);

// View freeDelivery products
customersRouter.get("/freeDelivery", freeDelivery);

module.exports = customersRouter;
