const db = require('../../db');

const addSoldItem = async (req, res) => {
    try {
        let sql = `INSERT INTO sold_item (order_id,Product_id, price,created_at) VALUES (?,?,?,?)`;
        let data = [req.body.order_id, req.body.Product_id, req.body.price, new Date];
        let query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addSoldItem,
}