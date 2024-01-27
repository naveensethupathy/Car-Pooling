const express = require('express');
const router = express.Router();
const {saveCustomer} = require("../controller/SignupController")
const {checkUser} = require("../controller/LoginController")
router.post('/signup',saveCustomer)
router.post('/login',checkUser)
module.exports = router