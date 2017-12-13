//***********************************************
//				Imports
//***********************************************
var models = require('../Models');

//***********************************************
//				Controllers
//***********************************************
var getUsers = (req,res)=>{
	models.user.find((err,docs)=>{
		if(err){console.log(err);}
		else{res.render('../Views/users.ejs',{users:docs});}
	});
};

var getUser = (req,res)=>{
	models.user.findById(req.params.userid).exec((err,doc)=>{
		if(err){console.log(err);}
		else{res.render('../Views/users.ejs',{users:[doc]});}
	});
};
var getAbout = (req,res)=>{
	models.user.findById(req.params.userid).select('about').exec((err,doc)=>{
		res.send(doc);
	});
}
var getContact = (req,res)=>{
	models.user.findById(req.params.userid).select('contact').exec((err,doc)=>{
		res.send(doc);
	});
}
var getEducation = (req,res)=>{
	models.user.findById(req.params.userid).select('education').exec((err,doc)=>{
		res.send(doc);
	});
}
var getProjects = (req,res)=>{
	models.user.findById(req.params.userid)
	.select('projects').exec((err,docs)=>{
		if(err){ console.log(err);}
		else{ res.send(docs);}
	});
};

var getProject = (req,res)=>{
	models.user.findById(req.params.userid)
	.select('projects').exec((err,docs)=>{
		if(err){console.log(err);}
		else{
			res.send(docs.projects.id(req.params.projectid));
		}
	})
}

var getExperience = (req,res)=>{
	//model
}
//***********************************************
//				Export
//***********************************************
module.exports = {
	getUsers, getUser, getAbout, getContact, 
	getEducation, getProjects, getProject, 
	getExperience
};