const db = require('../db');

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
        let sql = `SELECT * FROM product WHERE name='${req.params.id}'`;
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
        let sql = `SELECT * FROM product WHERE product.category_id = "${req.params.i}"`;
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
        let sql = `SELECT * FROM product WHERE name LIKE '%${req.params.i}%'`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

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

module.exports = {
    viewAllProducts,
    productDetails,
    viewCategories,
    viewProducts,
    searchProducts,
    discounted,
    newProducts,
}
