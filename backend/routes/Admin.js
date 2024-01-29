const express = require('express');
const router = express.Router();
const {saveEmployee,getEmployee, editEmployee, deleteEmployee} = require("../controller/EmployeeController")

router.post('/saveEmployee',saveEmployee)
router.get('/getEmployee',getEmployee)
router.put('/editEmployee/:id',editEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
module.exports = router