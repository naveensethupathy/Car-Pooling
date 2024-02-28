const express = require('express');
const router = express.Router();
const {saveCustomer} = require("../controller/SignupController")
const {checkUser, getCustomer} = require("../controller/LoginController");
const { getRoute, GetRouteById } = require('../controller/RouteController');
const {protect} = require('../middleware/authMiddleware')
router.post('/signup',saveCustomer)
router.post('/login',checkUser)
router.get('/route',getRoute)
router.get('/route/:id',GetRouteById)
router.get('/getCustomer/:email',getCustomer)
module.exports = router