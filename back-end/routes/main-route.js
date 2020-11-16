const express = require("express");
// const mainRouter = express.Router();
const mainRouter = require("./seller.js");
// mainRouter.get("/seller_URL", (req, res) => {
//   res.json("HELLO WORLD");
// });

module.exports = mainRouter;
