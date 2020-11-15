const db = require("./../../db");


const getAllRatingBySelller = (req, res) => {
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


module.exports = { getAllRatingBySelller };