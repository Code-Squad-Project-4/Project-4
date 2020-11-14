const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers('x-auth')
  if (!token) {
   return res.status(401).json("Please login first");
  }
  try {
    await jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    throw err;
  }
};

const adminPermission = async (req,res,next)=>{
  if(role_id !==1){return res.status(400).json("You don't have the permission")}
  next();
};
const sellerPermission = async (req,res,next)=>{
  if(role_id !==2){return res.status(400).json("You don't have the permission")}
  next();
};
// const customerPermission = async (req,res,next)=>{
//   if(role_id !==3){return res.status(400).json("You don't have the permission")}
//   next();
// };

    

module.exports = {
  authentication,
  adminPermission,
  sellerPermission
  }

