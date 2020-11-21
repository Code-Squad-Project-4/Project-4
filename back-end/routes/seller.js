const express = require("express");
const sellerRouter = express.Router();
const {getUserURL,
  getCurrentMonthlySales,
  totalNumberOfItemsAvailable,
  totalNumberOfItemsSold,
  sellerRating,
  getAllMyProducts,
  updateProduct,
  hideProduct,
  showProduct,
  addProduct,
  salesHistory} = require("../controllers/seller-account-controller");

  sellerRouter.get("/logo_url/:id", getUserURL)
  sellerRouter.get("/monthly_sales/:id", getCurrentMonthlySales)
  sellerRouter.get("/items_available/:id", totalNumberOfItemsAvailable)
  sellerRouter.get("/items_sold/:id", totalNumberOfItemsSold)
  sellerRouter.get("/rating/:id", sellerRating)
  sellerRouter.get("/products/:id", getAllMyProducts)
  sellerRouter.put("/products/update/:id", updateProduct)
  sellerRouter.put("/products/hide/:id", hideProduct) //send {seller_id : id} in body and customer id in params
  sellerRouter.put("/products/show/:id", showProduct) //send {seller_id : id} in body and customer id in params
  sellerRouter.post("/products/add/:id", addProduct)
  sellerRouter.get("/sales_history/:id", salesHistory)
   



// mainRouter.get("/seller_URL", (req, res) => {
//   res.json("HELLO WORLD");
// });

module.exports = sellerRouter;
