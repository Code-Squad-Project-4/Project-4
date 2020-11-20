const express = require("express");

const {
  getAllRatingBySelller,
} = require("../../controllers/admin-controller/rating_controller");

const adminRouterRating = express.Router();

adminRouterRating.get("/", (req, res) => {
  getAllRatingBySelller(req, res);
});

module.exports = adminRouterRating;
