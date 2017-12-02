var express = require('express');
var router = express.Router();

router
	.route('/')
		.get((req,res)=>{
			res.send('<h1>Homepage</H1>');
		});
router
	.route('/skills')
		.get((req,res)=>{
			res.send('<H1>Skills</H1>');
		});
router
	.route('/projects')
		.get((req,res)=>{
			res.send('<h1>Projects</h1>');
		});
		
module.exports = router;