const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const {Customer} = require("../models")

const {Login} = require("../models")

const checkUser = asyncHandler(async(req,res) =>{
    if(!req.body.email || !req.body.pwd){
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    await Login.findOne({ where: { email: req.body.email }}).then((login)=>{
        console.log(req.body.pwd);
        console.log(login.password)
        if (login &&  bcrypt.compare(req.body.pwd,login.password ) || req.body.pwd === login.password){
            
            
            res.status(200).json(
                {
                id:login.id,
                name:login.name,
                email:login.email,
                usertype:login.usertype, 
                token:generateToken(login.id)
        })

            console.log(String(req.body.pwd));
    }
    else{
        res.status(400)
        throw new Error('No user exists')
    }
        
    })      
  
})
const getCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findOne({ where: { emailId: req.params.email } });
  
    res.status(200).json(customer)
  });
const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}
module.exports={
    checkUser,
    getCustomer,
}