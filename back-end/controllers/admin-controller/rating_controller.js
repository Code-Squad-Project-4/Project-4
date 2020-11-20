const db = require("./../../db");

const getAllRatingBySelller = (req, res) => {
  query = "select avg(rating_value) from ecommerce_project.rating group by ?";
  data = [req.query.sellerId];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      res.json(err);
    }
  });
};

module.exports = { getAllRatingBySelller };
