const asyncHandler = require("express-async-handler");

const axios = require("axios");
const { Route } = require("../models");

const getRoute = asyncHandler(async (req, res) => {
  Route.findAll().then((route) => {
    res.status(200).json(route);
  });
});
// const addRoutes = asyncHandler(async(req,res)=>{

// })

const addRoute = asyncHandler(async (req, res) => {
  count = await Route.count();
  Route.create({
    routeId: count + 1,
    startPoint: req.body.start,
    endPoint: req.body.end,
    distance: req.body.distance,
    date: req.body.date,
    time: req.body.time,
    vehicleNumber: req.body.vehicleno,
    vehicleModel: req.body.vehiclemodel,
    seats: req.body.seats,
  }).then((route) => {
    res.status(200).json(route);
  });
});
const countRoute = asyncHandler(async (req, res) => {
  count = await Route.count();
  console.log(count);
});

const deleteRoutes = asyncHandler(async (req, res) => {
  await Route.destroy({
    where: {
      routeId: req.params.id,
    },
  });
});
const GetRouteById = asyncHandler(async (req, res) => {
  await Route.findOne({
    where: {
      routeId: req.params.id,
    },
  }).then((val) => {
    res.status(200).json(val);
  });
});
const getRouteByPlace = asyncHandler(async (req, res) => {
  await Route.findOne({
    where: {
      startPoint: req.body.start,
      endPoint: req.body.end,
    },
  }).then((val) => {
    res.status(200).json(val);
  });
});
const editRoutes = asyncHandler(async (req, res) => {
  const route = await Route.findByPk(req.params.id);
  if (route === null) {
    console.log("Not found!");
  } else {
    await Route.update(
      {
        startPoint: req.body.start,
        endPoint: req.body.end,
        distance: req.body.distance,
        date: req.body.date,
        time: req.body.time,
        vehicleNumber: req.body.vehicleno,
        vehicleModel: req.body.vehiclemodel,
        seats: req.body.seats,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(employee);
  }
});

module.exports = {
  getRoute,
  countRoute,
  addRoute,
  deleteRoutes,
  GetRouteById,
  getRouteByPlace,
  editRoutes,
};
