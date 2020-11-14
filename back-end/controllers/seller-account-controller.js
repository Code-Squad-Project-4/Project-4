const db = require("./db");

const getUserURL = (req, res) => {
    let sql = `SELECT logo_url FROM users WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const getCurrentMonthlySales = (req, res) => {
    let sql = `SELECT SUM(p.price) monthly_sales FROM product p JOIN sold_item si is  ON p.id = si.id WHERE p.seller_id = ${req.params.id} AND MONTH(CURRENT_DATE()) = MONTH(si.created_at) `
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const totalNumberOfItemsAvailable = (req, res) => {
    let sql = `SELECT COUNT(seller_id) FROM product p JOIN sold_item si WHERE p.id = si.product_id AND seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const totalNumberOfItemsSold = (req, res) => {
    let sql = `SELECT COUNT(p.id) FROM product p JOIN sold_item si ON p.id = si.product_id WHERE seller_id = ${req.params.id} `
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const sellerRating = (req, res) => {
    let sql = `SELECT SUM(rating_value) / COUNT(rating_value) WHERE seller_id = ${req.params.id}`
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
    sellerRating

}