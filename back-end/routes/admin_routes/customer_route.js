const express = require("express");

const {
  getAllCustomer,
  disableCustomer,
} = require("../../controllers/admin-controller/customer_controller");

const adminRouterCustomer = express.Router();

adminRouterCustomer.get("/", (req, res) => {
  getAllCustomer(req, res);
});

adminRouterCustomer.put("/disableCustomer", (req, res) => {
  disableCustomer(req, res);
});

module.exports = adminRouterCustomer;
