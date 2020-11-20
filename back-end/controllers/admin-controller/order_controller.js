const db = require("./../../db");

const getAllOrder = (req, res) => {
  query =
    "select * from ecommerce_project.order where created_at BETWEEN  ? and ?";
  data = [req.query.startDate, req.query.endDate];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

const getOrderByCustomer = (req, res) => {
  query =
    "select O.id from ecommerce_project.order   O join ecommerce_project.users U on  O.customer_id = U.id where u.id = ?";
  data = [req.query.userId];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

const getOrderBySeller = (req, res) => {
  query =
    "select P.id ,U.id,U.user_name,P.name from ecommerce_project.users U join ecommerce_project.product P on P.seller_id = U.id join ecommerce_project.sold_item S on P.id = S.product_id join ecommerce_project.order O on S.order_id = O.id where U.id = ?";
  data = [req.query.sellerId];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

const cancelOrder = (req, res) => {
  query = "update ecommerce_project.order set isCancel='Yes' where id=?";
  data = [req.body.orderId];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("The order was canceled");
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  getAllOrder,
  getOrderByCustomer,
  getOrderBySeller,
  cancelOrder,
};
