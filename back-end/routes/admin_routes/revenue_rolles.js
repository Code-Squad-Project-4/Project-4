const express = require("express");

const {
  getAllRevenueByDate,
} = require("../../controllers/admin-controller/revenue_controller");

const adminRouterRevenue = express.Router();

adminRouterRevenue.get("/", (req, res) => {
  getAllRevenueByDate(req, res);
});

module.exports = adminRouterRevenue;
