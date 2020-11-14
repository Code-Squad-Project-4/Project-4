const db = require("./../../db");

const getAllCategory = (req, res) => {
  db.query("select * from category where hide = 'No'", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
};

const addNewCategory = (req, res) => {
  let query = "insert into category (name,hide) values (?,?)";
  let data = [req.body.name, "No"];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("new category created!");
    } else {
      res.json(err);
    }
  });
};

const hideCategory = (req, res) => {
  let query = "update category set hide ='Yes' where name = ?";
  let data = [req.body.name];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("the category was hidden");
    } else {
      res.json(err);
    }
  });
};
module.exports = { getAllCategory, addNewCategory, hideCategory };
