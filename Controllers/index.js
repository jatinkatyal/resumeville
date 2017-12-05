//***********************************************
//				Imports
//***********************************************
var path = require('path');
var models = require('../Models');

//***********************************************
//				Controllers
//***********************************************
var getSkills = (req,res)=>{
	models.skills.find((err,docs)=>{
		if(err){console.log(err);}
		else{res.send(docs);}
	})
};
var getProjects = (req,res)=>{
	models.projects.find((err,docs)=>{
		if(err){console.log(err)}
		else{res.send(docs)}
	})
};
var getHome =(req,res)=>{
	res.sendFile(path.join(__dirname,'../Views/homepage.html'));
};

module.exports = {
	getSkills, getProjects, getHome
}