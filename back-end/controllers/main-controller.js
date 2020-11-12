const db = require('../db');

const allProducts = async (req, res) => {
   try {
    let sql = `SELECT * FROM product`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.json( results);
    });
   } catch (error) {
       throw error;
   }
};


module.exports = {
    allProducts,
}