const db = require("./../../db");

const getAllSeller = (req, res) => {
  db.query(
    "select * from users where role_id = 2 and isDisable ='No'",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json(err);
      }
    }
  );
};

const disableSeller = (req, res) => {
  let query = "update users set isDisable ='Yes' where  user_name = ?";
  let data = [req.body.name];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("the seller was disable");
    } else {
      res.json(err);
    }
  });
};

module.exports = { getAllSeller, disableSeller };
