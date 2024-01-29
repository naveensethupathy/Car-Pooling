const express = require('express');
const router = express.Router();
const {saveEmployee,getEmployee, editEmployee, deleteEmployee} = require("../controller/EmployeeController");
const { addRoute, countRoute, getRoute } = require('../controller/RouteController');

router.post('/saveEmployee',saveEmployee)
router.post('/addRoute',addRoute)
router.get('/getEmployee',getEmployee)
router.put('/editEmployee/:id',editEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
router.get('/countRoute',countRoute)
router.get('/routes',getRoute)

module.exports = router
getRoute