//***********************************************
//				Imports
//***********************************************
var express = require('express');
var controller = require('../Controllers');

//***********************************************
//				Routing
//***********************************************
var router = express.Router();

//Homepage
router.route('/').get((req,res)=>{
	controller.getHome(req,res);
});

//Users
router.route('/users').get((req,res)=>{
	controller.users.getUsers(req,res);
});
router.route('/users/:userid').get((req,res)=>{
	controller.users.getUser(req,res);
});
router.route('/users/:userid/about').get((req,res)=>{
	controller.users.getAbout(req,res);
});
router.route('/users/:userid/contact').get((req,res)=>{
	controller.users.getContact(req,res);
});
router.route('/users/:userid/education').get((req,res)=>{
	controller.users.getEducation(req,res);
});

//Projects
router.route('/users/:userid/projects')
	.get((req,res)=>{
		controller.users.getProjects(req,res);
});
router
	.route('/users/:userid/projects/:projectid')
	.get((req,res)=>{
		controller.users.getProject(req,res);
});


//***********************************************
//				Export
//***********************************************
module.exports = router;