const express = require("express");

const {
  getAllSeller,
  disableSeller,
} = require("../../controllers/admin-controller/seller_contoller");

const adminRouterSeller = express.Router();


adminRouterSeller.get("/", (req, res) => {
  getAllSeller(req, res);
});

adminRouterSeller.put("/disableSeller", (req, res) => {
  disableSeller(req, res);
});

module.exports = adminRouterSeller;
