//***********************************************
//				Imports
//***********************************************
var express = require('express');
var path = require('path');
var controller = require('../Controllers');

//***********************************************
//				Routing
//***********************************************
var router = express.Router();

router.route('/').get((req,res)=>{
	controller.getHome(req,res);
});
router.route('/skills').get((req,res)=>{
	controller.getSkills(req,res);
})
router.route('/projects').get((req,res)=>{
	controller.getProjects(req,res);
});	

//***********************************************
module.exports = router;