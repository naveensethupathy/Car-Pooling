const express = require('express');
const router = express.Router();
const {saveEmployee,getEmployee, editEmployee, deleteEmployee, getEmployeeByReg} = require("../controller/EmployeeController");
const { addRoute, countRoute, getRoute, deleteRoutes, getRouteByPlace, editRoutes } = require('../controller/RouteController');

router.post('/saveEmployee',saveEmployee)
router.post('/addRoute',addRoute)
router.get('/getEmployee',getEmployee)
router.put('/editEmployee/:id',editEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
router.delete('/deleteRoutes/:id',deleteRoutes)
router.get('/countRoute',countRoute)
router.get('/routes',getRoute)
router.get('/getEmpByReg/:regno',getEmployeeByReg)
router.post('/routesearch',getRouteByPlace)
router.put('/editRoutes/:id',editRoutes)

module.exports = router
