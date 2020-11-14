const express = require('express');
const {customerRegister,sellerRegister,login,}=require('../controllers/Login');
const loginRouter = express.Router();




loginRouter.post("/register/costumer",customerRegister);
loginRouter.post("/register/seller",sellerRegister);

loginRouter.post("/login",login);

module.exports = loginRouter;


