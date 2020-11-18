const express = require("express");
const mainRouter = express.Router();

const customersRouter = require('./customers.route');
mainRouter.use(customersRouter); 

module.exports = mainRouter;





