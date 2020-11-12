const connection = require("../db");
require("dotenv").config();
const bcrypt = require('bcrypt');


const  register = async (req,res)=>{
     let user_name=req.body.user_name;
     let company_name = req.body.company_name;
     let adress = req.body.adress;
     let email =req.body.email;
     let password =req.body.password;
     let phone = req.body.phone;

     //Checking if there is  same data in database with the request data
    const query = await `SELECT * FROM users WHERE email ='${email}' OR  user_name = '${user_name}' OR company_name='${company_name}' `;
    connection.query(query,async(err,result)=>{
        if(err) throw err;
       console.log(user_name)
       if(result.length===1){
            if(result[0].user_name===user_name)return res.status(400).send("User name is used..");
            if(result[0].email===email) return res.status(400).send("Email is used..");
            if(result[0].company_name===company_name) return res.status(400).send("Company name is used..");
       }
        //hashing the password 
        password = await bcrypt.hash(password,parseInt(process.env.SALT));
    
      const newUser =`INSERT INTO users (user_name,company_name,adress,email,password,phone) VALUES('${user_name}','${company_name}','${adress}','${email}','${password}','${phone}');`
      connection.query(newUser,(err,result)=>{
          if(err) throw err;
      })

      
    res.json("Added")
    })
}

const login = async (req,res)=>{
    let email=req.body.email;
    

    const query = await `SELECT * FROM users WHERE email ='${email}'`
    connection.query(query,async(err,result)=>{
        if(err) throw err;
        
        //check if there is user with the request data
        if(result.length===1) {
            
            console.log(req.body.password);
            console.log(result[0])
            let password =await bcrypt.compare(req.body.password,result[0].password );
            console.log(password)
            if(password){
                return res.json("Login successful")
            } else{
                return res.status(400).send("Invalid Email or password..");
            }
        }else{
            return res.status(400).send("Invalid Email or password..");
        }
    })

}
module.exports={
    register,
    login,
}