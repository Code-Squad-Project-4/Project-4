const express = require("express");
const mainRouter = express.Router();

const customers = require('./customers.route');
mainRouter.use(customers); 

module.exports = mainRouter;





