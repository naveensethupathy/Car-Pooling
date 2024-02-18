const asyncHandler = require("express-async-handler");

const axios = require("axios");
const { Customer, Login } = require("../models");

const saveCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.create({
    customerName: req.body.name,
    emailId: req.body.email,
    mobileNumber: req.body.mobilenumber,
    password: req.body.pwd,
    status: "1",
  });
  Login.create({
    email: req.body.email,
    password: req.body.pwd,
    usertype: "user",
  });
  res.status(200).json(customer);
});

module.exports = {
  saveCustomer,
};
