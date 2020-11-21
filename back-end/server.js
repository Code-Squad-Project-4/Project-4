const express = require("express");
require("dotenv").config();
const mainRouter = require("./routes/main-route");
const sellerRouter = require("./routes/seller");


const loginRouter = require("./routes/login-r");
// const cors = require("cors");


const adminRouterProduct = require("./routes/admin_routes/product_route");
const adminRouterCategory = require("./routes/admin_routes/category_route");
const adminRouterCustomer = require("./routes/admin_routes/customer_route");
const adminRouterSeller = require("./routes/admin_routes/seller_route");
const adminRouterOrder = require("./routes/admin_routes/order_route");
const adminRouterRating = require("./routes/admin_routes/rating_route");
const adminRouterRevenue = require("./routes/admin_routes/revenue_rolles");
const cors = require("cors");


const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/seller", sellerRouter);
app.use(mainRouter);
app.use(loginRouter);


app.use(loginRouter);

app.get("/data", (req, res) => {
  db.query("select * from role", (err, rows, fields) => {
    if (!err) {
      console.log(rows);
    } else {
      console.log(err);
    }
  });
});


app.use("/adminProduct", adminRouterProduct);
app.use("/adminCategory", adminRouterCategory);
app.use("/adminCustomer", adminRouterCustomer);
app.use("/adminSeller", adminRouterSeller);
app.use("/adminOrder", adminRouterOrder);
app.use("/adminRating", adminRouterRating);
app.use("/adminRevenue", adminRouterRevenue);


const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
