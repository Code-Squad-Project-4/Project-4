const express = require("express");
const {
  getAllCategory,
  addNewCategory,
  hideCategory,
} = require("../../controllers/admin-controller/category_controller");

const adminRouterCategory = express.Router();

// view all category
adminRouterCategory.get("/", (req, res) => {
  getAllCategory(req, res);
});

//add new category
adminRouterCategory.post("/newCategory", (req, res) => {
  addNewCategory(req, res);
});

adminRouterCategory.put("/hideCategory", (req, res) => {
  hideCategory(req, res);
});

module.exports = adminRouterCategory;
