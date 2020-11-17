const connection = require("../db");
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const  register = async (req,res)=>{
     let user_name=req.body.user_name;
     let company_name = req.body.company_name;
     let adress = req.body.adress;
     let email =req.body.email;
     let password =req.body.password;  
     let phone = req.body.phone;
     let role_id =''

     //setting the role for the registered account
     if(req.params.role ==="seller"){
        role_id = 2
     }else if(req.params.role ==="customer"){
        role_id = 3
     };

     //Checking if there is  same data in database with the request data
    const query = await `SELECT * FROM users WHERE email ='${email}' OR  user_name = '${user_name}' OR company_name='${company_name}' `;
    connection.query(query,async(err,result)=>{
       if(err) throw err;
       if(result.length===1){
            if(result[0].email===email) return res.status(400).send("Email is used..");
            if(result[0].user_name===user_name)return res.status(400).send("User name is used..");
            if(result[0].company_name===company_name) return res.status(400).send("Company name is used..");
       };

      //hashing the password 
      password = await bcrypt.hash(password,parseInt(process.env.SALT));

      // Adding new user to Database
      const newUser =`INSERT INTO users (user_name,company_name,adress,email,password,phone,role_id) VALUES('${user_name}','${company_name}','${adress}','${email}','${password}','${phone}','${role_id}');`
      connection.query(newUser,(err,result)=>{if(err) throw err});

      // if everything is good get this res..
      res.json("Your account has been successfully created.")
    })
};

const login = async (req,res)=>{
    let email=req.body.email;
    const query = await `SELECT * FROM users WHERE email ='${email}'`

    connection.query(query,async(err,result)=>{
        if(err) throw err;
        
        //check if there is user with the request data
        if(result.length===1) {
            let password =await bcrypt.compare(req.body.password,result[0].password );
            if(password){
                const payload = {
                    id:result[0].id,
                    role_id:result[0].role_id
                };
                const options ={
                    expiresIn:process.env.TOKEN_EXPIRATION
                };

                //putting token to login account
                token =jwt.sign(payload,process.env.SECRET,options);
                res.header('x-auth',token).json(token);
            } else{
                return res.status(400).send("Invalid Email or password..");
            }
        }else return res.status(400).send("Invalid Email or password..")               
    })

};
module.exports={
    register,
    login,
};