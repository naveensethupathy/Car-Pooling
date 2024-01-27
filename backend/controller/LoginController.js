const asyncHandler = require('express-async-handler');


const {Login} = require("../models")

const checkUser = asyncHandler(async(req,res) =>{
  
    const login = await Login.findOne({ where: { email: req.body.email }})
   
    if (req.body.pwd === login.password){
            
            res.status(200).json(login)
            
    }
    
       
  
})

module.exports={
    checkUser
}