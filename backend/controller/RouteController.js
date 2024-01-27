const asyncHandler = require('express-async-handler');

const axios = require('axios');
const {Route} = require("../models")

const getRoute = asyncHandler(async(req,res) =>{
    
    Route.findAll().then((route)=>{
        res.status(200).json(route)
    })

})
const saveRoute = asyncHandler(async(req,res) =>{
   
        Route.create({
            routeId:Route.findAndCountAll()+1,
            startPoint:req.body.startpoint,
            endPoint:req.body.endpoint,
            distance:req.body.distance,
    
            
        }).then((route)=>{
            res.status(200).json(route)
        })
        
    })

module.exports={
    getRoute,
    saveRoute

}