var express = require('express');
var path = require('path');

var router = express.Router();

router
	.route('/')
		.get((req,res)=>{
			res.sendFile(path.join(__dirname,'../Views/homepage.html'));
		});
router
	.route('/skills')
		.get((req,res)=>{
			res.sendFile(path.join(__dirname,'../Views/skills.html'));
		});
router
	.route('/projects')
		.get((req,res)=>{
			res.sendFile(path.join(__dirname,'../Views/projects.html'));
		});

module.exports = router;