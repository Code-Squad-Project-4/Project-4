const db = require('../db');
require("dotenv").config();

const allProducts = async (req, res) => {
    try {
        let sql = `SELECT * FROM product`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const productDetails = async (req, res) => {
    try {
        let sql = `SELECT * FROM product WHERE name = ${req.params.id}`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const viewCategories = async (req, res) => {
    try {
        let sql = `SELECT * FROM category`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    allProducts,
    productDetails,
    viewCategories,
}