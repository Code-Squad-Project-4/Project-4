const db = require("./db");

const getUserURL = (req, res) => {
    let sql = `SELECT user_URL FROM users WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const getCurrentMonthlySales = (req, res) => {
    let sql = `SELECT SUM(p.price) monthly_sales FROM Product p JOIN item_sales is  ON p.id = is.id WHERE p.seller_id = ${req.params.id} AND MONTH(CURRENT_DATE()) = MONTH(is.created_at) `
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const totalNumberOfItemsAvailable = (req, res) => {
    let sql = `SELECT COUNT(seller_id) FROM Product WHERE item_sales_id = NULL AND seller_id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const totalNumberOfItemsSold = (req, res) => {
    let sql = `SELECT FROM Product JOIN item_sales WHERE seller_id = ${req.params.id} `
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