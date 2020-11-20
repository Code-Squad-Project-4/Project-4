const db = require('../../db');

const customerOrders = async (req, res) => {
    try {
        const order = `order`;
        let sql = `SELECT * FROM ecommerce_project.order WHERE order.customer_id = ${req.params.i}`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const addOrder = async (req, res) => {
    try {
        let sql = `INSERT INTO ecommerce_project.order(customer_id,created_at) VALUES (?,?)`;
        let data = [req.params.i, new Date];
        let query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.json({ customer_id: data[0], created_at: data[1] });
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    customerOrders,
    addOrder,
}