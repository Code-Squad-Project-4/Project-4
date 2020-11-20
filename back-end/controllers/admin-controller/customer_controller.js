const db = require("./../../db");

const getAllCustomer = (req, res) => {
  db.query(
    "select * from users where role_id = 3 and isDisable ='No'",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json(err);
      }
    }
  );
};

const disableCustomer = (req, res) => {
  let query = "update users set isDisable ='Yes' where user_name = ?";
  let data = [req.body.name];
  db.query(query, data, (err, rows, fields) => {
    if (!err) {
      res.json("the customer was disable");
    } else {
      res.json(err);
    }
  });
};

module.exports = { getAllCustomer, disableCustomer };
