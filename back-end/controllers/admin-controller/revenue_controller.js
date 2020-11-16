const db = require("./../../db");

const getAllRevenueByDate = (req, res) => {
  console.log("hello");
  query =
    "Select * from ecommerce_project.sold_item  where date(created_at) = ?";
  data = [req.query.date];
  console.log(
    `Select * from ecommerce_project.sold_item  where date(created_at) = ${req.query.date}`
  );
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

module.exports = { getAllRevenueByDate };
