const express = require("express");
const mainRouter = express.Router();
const {allProducts} = require('../controllers/main-controller')

mainRouter.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

// View all products
mainRouter.get("/allProducts", allProducts);

module.exports = mainRouter;
