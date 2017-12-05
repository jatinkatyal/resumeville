//***********************************************
//				Imports
//***********************************************
var models = require('../Models');

//***********************************************
//				Controllers
//***********************************************
var getSkills = (req,res)=>{
	models.skills.find((err,docs)=>{
		if(err){console.log(err);}
		else{res.render('../Views/skills.ejs',{skills:docs});}
	})
};
var getProjects = (req,res)=>{
	models.projects.find((err,docs)=>{
		if(err){console.log(err)}
		else{res.render('../Views/projects.ejs',{projects:docs})}
	})
};
var getHome =(req,res)=>{
	res.render('../Views/homepage.ejs');
};

module.exports = {
	getSkills, getProjects, getHome
}