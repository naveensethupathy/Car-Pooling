const express = require('express');
const router = express.Router();
const {saveEmployee,getEmployee, editEmployee} = require("../controller/EmployeeController")

router.post('/saveEmployee',saveEmployee)
router.get('/getEmployee',getEmployee)
router.get('/editEmployee/:id',editEmployee)

module.exports = router