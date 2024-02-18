const express = require('express');
const router = express.Router();
const {saveCustomer} = require("../controller/SignupController")
const {checkUser} = require("../controller/LoginController");
const { getRoute, GetRouteById } = require('../controller/RouteController');
router.post('/signup',saveCustomer)
router.post('/login',checkUser)
router.get('/route',getRoute)
router.get('/route/:id',GetRouteById)
module.exports = router