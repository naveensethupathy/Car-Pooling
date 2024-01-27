const asyncHandler = require('express-async-handler');

const axios = require('axios');
const {Employee,Login} = require("../models")

const getEmployee = asyncHandler(async(req,res)=>{
   Employee.findAll().then((employee)=>{
        res.status(200).json(employee)
    })

        
    
})




const saveEmployee = asyncHandler(async(req,res) =>{
    if (req.body.password === req.body.cpwd){
        Employee.create({
            email:req.body.email,
            username:req.body.username,
            mobileNumber:req.body.mobilenumber,
            password:req.body.password,
        
            
        }).then((employee)=>{
            res.status(200).json(employee)
            
        })
        Login.create({
            email:req.body.email,
            password:req.body.password,
            usertype:"user"
        })
    }
    else{
        console.log("Enter correct password");
    }
})

const editEmployee = asyncHandler(async(req,res)=>{
    const employee = await Employee.findByPk(1);
    if (employee === null) {
      console.log('Not found!');
    } else {
      console.log(employee instanceof Employee);
      console.log(employee);
    }
})

const deleteEmployee = asyncHandler(async(req,res)=>{
    await Employee.destroy({
        where: {
          id: req.params.id
        },
      });
    
})



module.exports={
    saveEmployee,
    getEmployee,
    editEmployee
}