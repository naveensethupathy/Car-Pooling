const asyncHandler = require('express-async-handler');

const axios = require('axios');
const {Route} = require("../models")

const getRoute = asyncHandler(async(req,res) =>{
    
    Route.findAll().then((route)=>{
        res.status(200).json(route)
    })

})
// const addRoutes = asyncHandler(async(req,res)=>{

// })



const addRoute = asyncHandler(async(req,res) =>{
    count = await Route.count()
        Route.create({
            routeId:count+1,
            startPoint:req.body.start,
            endPoint:req.body.end,
            distance:req.body.distance,
            date:req.body.date,
            time:req.body.time,
            vehicleNumber:req.body.vehicleno,
            vehicleModel:req.body.vehiclemodel,
            seats:req.body.seats,

    
            
        }).then((route)=>{
            res.status(200).json(route)
        })
        
    })
    const countRoute = asyncHandler(async(req,res) =>{
   
        
            count = await Route.count()
            console.log(count);
    
        
    })
module.exports={
    getRoute,
   countRoute,
    addRoute,

}