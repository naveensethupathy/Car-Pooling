const asyncHandler = require('express-async-handler');


const {Login} = require("../models")

const checkUser = asyncHandler(async(req,res) =>{
    if(!req.body.email || !req.body.pwd){
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    await Login.findOne({ where: { email: req.body.email }}).then((login)=>{
        if (String(req.body.pwd) === login.password){
            
            
            res.status(200).json(login)

            console.log(String(req.body.pwd));
    }
        
    })
   
    
    
       
  
})

module.exports={
    checkUser
}