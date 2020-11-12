const db = require('../db');
require("dotenv").config();

const viewAllProducts = async (req, res) => {
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

const viewProducts = async (req, res) => {
    try {
        let sql = `SELECT * FROM product INNER JOIN ${req.params.i} ON product.id = "${req.params.i}.id"`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const searchProducts = async (req, res) => {
    try {
        let sql = `SELECT * FROM product WHERE name LIKE '%'${req.params.i}'%'`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    viewAllProducts,
    productDetails,
    viewCategories,
    viewProducts,
    searchProducts,
}