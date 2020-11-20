const db = require('../../db');

const discounted = async (req, res) => {
    try {
        let sql = `SELECT * FROM product WHERE newprice IS NOT NULL`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const newProducts = async (req, res) => {
    try {
        let sql = `SELECT * FROM product WHERE created_at > '${req.params.i}' `;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const freeDelivery = async (req, res) => {
    try {
        let sql = `SELECT * FROM product WHERE delivery=0`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    discounted,
    newProducts,
    freeDelivery,
}