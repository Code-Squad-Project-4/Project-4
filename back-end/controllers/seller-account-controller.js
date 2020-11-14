const db = require("./db");


// to get the seller account logo:
const getUserURL = (req, res) => {
    let sql = `SELECT logo_url FROM users WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

// to get the monthly sales month-to-date for the seller:
const getCurrentMonthlySales = (req, res) => {
    let sql = `SELECT SUM(p.price) monthly_sales FROM product p JOIN sold_item si is  ON p.id = si.id WHERE p.seller_id = ${req.params.id} AND MONTH(CURRENT_DATE()) = MONTH(si.created_at) `
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

// to get the total number of items available in the seller accounts's store
const totalNumberOfItemsAvailable = (req, res) => {
    let sql = `SELECT COUNT(seller_id) FROM product p JOIN sold_item si WHERE p.id = si.product_id AND seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

// to get the number of items sold
const totalNumberOfItemsSold = (req, res) => {
    let sql = `SELECT COUNT(p.id) FROM product p JOIN sold_item si ON p.id = si.product_id WHERE seller_id = ${req.params.id} `
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

// to get the seller's rating 
const sellerRating = (req, res) => {
    let sql = `SELECT SUM(rating_value) / COUNT(rating_value) WHERE seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  My store:

const getAllMyProducts = (req, res) => {
    let sql = `SELECT * FROM products WHERE seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const updateProduct = (req, res) => {
    let sql = `UPDATE product SET name = ${req.body.name} , price = ${req.body.price}, description = ${req.body.description}, newprice = ${req.body.newprice}, quantity = ${req.body.quantity}, img_url = ${req.body.img_url}, category_id = ${req.body.category_id}  WHERE seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const hideProduct = (req, res) => {
    let sql = `UPDATE product SET is_hidden = 'true'  WHERE seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const showProduct = (req, res) => {
    let sql = `UPDATE product SET is_hidden = 'false'  WHERE seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}











module.exports = {
    getUserURL,
    getCurrentMonthlySales,
    totalNumberOfItemsAvailable,
    totalNumberOfItemsSold,
    sellerRating,
    getAllMyProducts, 
    updateProduct,
    hideProduct,
    showProduct

}