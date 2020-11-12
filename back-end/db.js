const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "ecommerce_project",
});

connection.connect((err) => {
  if (err) {
    console.error("CONNECTION ERROR: ", err.stack);
    return;
  }
  console.log("CONNECTION ID: ", connection.threadId);
});

module.exports = connection;
