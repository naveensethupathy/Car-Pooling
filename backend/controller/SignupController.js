const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler");

const axios = require("axios");
const { Customer, Login } = require("../models");

const saveCustomer = asyncHandler(async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.pwd,salt)
  count = await Customer.count();
  const customer = await Customer.create({
    customerId: count+1, 
    customerName: req.body.name,
    emailId: req.body.email,
    mobileNumber: req.body.mobilenumber,
    password: hashedPassword,
    status: "1",
  });
  Login.create({
    email: req.body.email,
    password: hashedPassword,
    usertype: "user",
  });
  res.status(200).json(customer);
});

module.exports = {
  saveCustomer,
};
