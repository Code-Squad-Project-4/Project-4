const db = require("./../../db");

const getAllProducts = (req, res) => {
  db.query("select * from product where hide = 'No'", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

const addNewProduct = (req, res) => {
  let query =
    "INSERT into product(name, price, description, newprice, quantity, seller_id, img_url, created_at, category_id,hide) values(?,?,?,?,?,?,?,?,?,?) ";
  let data = [
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.newprice,
    req.body.quantity,
    req.body.seller_id,
    req.body.img_url,
    new Date(),
    req.body.category_id,
    "No",
  ];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("product created!");
    } else {
      res.json(err);
    }
  });
};

const hideProduct = (req, res) => {
  let query = "update product set hide = 'yes' where id = ?";
  let data = [req.body.id];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("The product was hide");
    } else {
      res.json(err);
    }
  });
};

const allhideProduct = (req, res) => {
  db.query("select * from product where hide = 'Yes'", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

const showProduct = (req, res) => {
  let query = "update product set hide = 'No' where id = ?";
  let data = [req.body.id];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("The product was enable");
    } else {
      res.json(err);
    }
  });
};

module.exports = {
  getAllProducts,
  addNewProduct,
  hideProduct,
  allhideProduct,
  showProduct,
};
