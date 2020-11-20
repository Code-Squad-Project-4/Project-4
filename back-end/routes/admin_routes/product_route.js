const express = require("express");
const {
  getAllProducts,
  addNewProduct,
  hideProduct,
  allhideProduct,
  showProduct,
} = require("../../controllers/admin-controller/product_controller");

const adminRouterProduct = express.Router();

//View all products
adminRouterProduct.get("/", (req, res) => {
  getAllProducts(req, res);
});

// add new product
adminRouterProduct.post("/newProduct", (req, res) => {
  addNewProduct(req, res);
});

//hide spacefic product
adminRouterProduct.put("/hideProduct", (req, res) => {
  hideProduct(req, res);
});

//view all hide product
adminRouterProduct.get("/allHideProduct", (req, res) => {
  allhideProduct(req, res);
});

//show spacefic product
adminRouterProduct.put("/showProduct", (req, res) => {
  showProduct(req, res);
});
module.exports = adminRouterProduct;
