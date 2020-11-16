const jwt = require("jsonwebtoken");

//checking if login or not
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

//Admin permission middleware
const adminPermission = async (req,res,next)=>{
  const token = res.headers('x-auth');    
    await jwt.verify(token,process.env.SECRET),(err,result)=>{
      if (err) throw err;
      if(result.role_id===1){
        next()
      }else{
         res.json("You don't have the permission")
      }
    }
  };

  //seller permission middleware
  const sellerPermission = async (req,res,next)=>{
    const token = res.headers('x-auth');    
      await jwt.verify(token,process.env.SECRET),(err,result)=>{
        if (err) throw err;
        if(result.role_id===2){
          next()
        }else{
           res.json("You don't have the permission")
        }
      }
    }

  //customer permission
  const customerPermission = async (req,res,next)=>{
    const token = res.headers('x-auth');    
      await jwt.verify(token,process.env.SECRET),(err,result)=>{
        if (err) throw err;
        if(result.role_id===3){
          next()
        }else{
           res.json("You don't have the permission")
        }
      }
    }


    

module.exports = {
  authentication,
  adminPermission,
  sellerPermission,
  customerPermission
  }

