const db = require('../db');

const customerRating = async (req, res) => {
    try {
        let sql = `INSERT INTO rating (customer_id,seller_id) values (?,?)`;
        let data = [req.body.customer_id, req.body.seller_id];
        let query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    customerRating,
}