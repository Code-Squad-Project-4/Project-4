const express = require('express');
const {register,}=require('../controllers/Login');
const loginRouter = express.Router();




loginRouter.post("/register",register);

module.exports = loginRouter;


