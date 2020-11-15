const express = require("express");
const customers = express.Router();

const {viewAllProducts, productDetails, viewCategories, viewProducts, searchProducts,
    discounted, newProducts, customerOrders, addOrder, addSoldItem } = require('../controllers/main-controller')

// View all products
customers.get("/Products", viewAllProducts);

// View a specific product's details
customers.get("/product/:id", productDetails);

// View all product categories
customers.get("/categories", viewCategories);

// View products by category
customers.get("/categories/:i", viewProducts);

// Search for products
customers.get("/searchProducts/:i", searchProducts);

// View discounted products
customers.get("/discounted", discounted);

// View latest products added
customers.get("/newProducts/:i", newProducts);

// View my order history
customers.get("/orders/:i", customerOrders);

// Add order 
customers.post("/order/:i", addOrder);

// Add add Sold Item 
customers.post("/SoldItem", addSoldItem);

module.exports = customers;
