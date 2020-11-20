const express = require("express");

const {
  getAllOrder,
  getOrderByCustomer,
  getOrderBySeller,
  cancelOrder,
} = require("../../controllers/admin-controller/order_controller");

const adminRouterOrder = express.Router();

adminRouterOrder.get("/", (req, res) => {
  getAllOrder(req, res);
});

adminRouterOrder.get("/orderByCustomer", (req, res) => {
  getOrderByCustomer(req, res);
});

adminRouterOrder.get("/orderBySeller", (req, res) => {
  getOrderBySeller(req, res);
});

adminRouterOrder.put("/cancelOrder", (req, res) => {
  cancelOrder(req, res);
});

module.exports = adminRouterOrder;
