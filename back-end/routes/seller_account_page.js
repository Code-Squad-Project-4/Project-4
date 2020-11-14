const express = require("express");
const mainRouter = express.Router();
const {getUserURL,
  getCurrentMonthlySales,
  totalNumberOfItemsAvailable,
  totalNumberOfItemsSold,
  sellerRating,
  getAllMyProducts} = require("../controllers/seller-account-controller");

   mainRouter.get("/seller_URL", getUserURL)
   mainRouter.get("/monthly_sales", getCurrentMonthlySales)
   mainRouter.get("items_available", totalNumberOfItemsAvailable)
   mainRouter.get("items_sold", totalNumberOfItemsSold)
   mainRouter.get("seller_rating", sellerRating)


// mainRouter.get("/seller_URL", (req, res) => {
//   res.json("HELLO WORLD");
// });

module.exports = mainRouter;
