const asyncHandler = require("express-async-handler");

const axios = require("axios");
const { Employee, Login } = require("../models");

const getEmployee = asyncHandler(async (req, res) => {
  Employee.findAll().then((employee) => {
    res.status(200).json(employee);
  });
});

const saveEmployee = asyncHandler(async (req, res) => {
  if (req.body.pwd === req.body.cpwd) {
    Employee.create({
      email: req.body.email,
      username: req.body.name,
      mobileNumber: req.body.mobileNumber,
      password: req.body.pwd,
      role: req.body.role,
    }).then((employee) => {
      res.status(200).json(employee);
    });
    Login.create({
      email: req.body.email,
      password: req.body.pwd,
      usertype: "user",
    });
  } else {
    console.log("Enter correct password");
  }
});

const editEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);
  if (employee === null) {
    console.log("Not found!");
  } else {
    await Employee.update(
      {
        username: req.body.name,
        email: req.body.email,
       
        mobileNumber: req.body.mobileNumber,
        password: req.body.pwd,
        role: req.body.role,
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

const deleteEmployee = asyncHandler(async (req, res) => {
  await Employee.destroy({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = {
  saveEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee
};
