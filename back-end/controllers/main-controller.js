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
        let data = [req.params.i,new Date];
        let query = db.query(sql, data, (err, results) => {
            if (err) throw err;
            res.json({customer_id :data[0] ,created_at:data[1]});
        });
    } catch (error) {
        throw error;
    }
};

const addSoldItem = async (req, res) => {
    try {
        let sql = `INSERT INTO sold_item (order_id,Product_id, price,created_at) VALUES (?,?,?,?)`;
        let data = [req.body.order_id,req.body.Product_id , req.body.price,new Date];
        let query = db.query(sql, data, (err, results) => {
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
    customerOrders,
    addOrder,
    addSoldItem
}

