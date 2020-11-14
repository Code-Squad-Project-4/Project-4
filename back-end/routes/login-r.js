const express = require('express');
const {register,login,}=require('../controllers/Login');
const loginRouter = express.Router();




loginRouter.post("/register/:role",register);

loginRouter.post("/login",login);

module.exports = loginRouter;


