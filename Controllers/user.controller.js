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
		if(err){console.log(err);
			res.send("Error!");
		}
		else{res.render('../Views/user.ejs',{user:doc});}
	});
};
var getUserForm = (req,res)=>{
	models.user.findById(req.params.userid).exec((err,doc)=>{
		if(err){console.log(err);}
		else{res.render('../Views/update.ejs',{user:doc});}
	});
}
var postNewUserForm = (req,res)=>{
	user = {
		name:{
			first:req.body.name_first,
			middle:req.body.name_middle,
			last:req.body.name_last
		},
		about:{
			objective:req.body.about_objective,
			long:req.body.about_long,
			hobbies:[],
			moto:req.body.about_moto
		},
		education:[],
		experience:[],
		projects:[],
		skills:[],
		contact:{
			mobile:req.body.contact_mobile,
			telephone:req.body.contact_telephone,
			email:req.body.contact_email
		},
		address:{
			streetAddress:req.body.address_streetAddress,
			area:req.body.address_area,
			district:req.body.address_district,
			state:req.body.address_state,
			pin:req.body.address_pin
		},
		activities:[]
	}
	if(req.body.about_hobbies.constructor===Array){
		for(i in req.body.about_hobbies){
			if(req.body.about_hobbies[i]){
				user.about.hobbies.push(req.body.about_hobbies[i])
			}
		}
	}else{
		user.about.hobbies.push(req.body.about_hobbies)
	}
	if(req.body.education_degree.constructor===Array){
		for(i in req.body.education_degree){
			edu={
				degree:req.body.education_degree[i],
				board:req.body.education_board[i],
				score:req.body.education_score[i]
			}
			if(edu.degree){
				user.education.push(edu);
			}
		}
	}else{
		edu={
				degree:req.body.education_degree,
				board:req.body.education_board,
				score:req.body.education_score
			}
			if(edu.degree){
				user.education.push(edu);
			}
	}
	if(req.body.experience_position.constructor===Array){
		for(i in req.body.experience_position){
			exp={
				position:req.body.experience_position[i],
				organisation:req.body.experience_organisation[i],
				description:req.body.experience_description[i]
			}
			if(exp.position){
				user.experience.push(exp);
			}
		}
	}else{
		exp={
			position:req.body.experience_position,
			organisation:req.body.experience_organisation,
			description:req.body.experience_description
		}
		if(exp.position){
			user.experience.push(exp);
		}
	}
	if(req.body.project_title.constructor===Array){
		for(i in req.body.project_description){
			project={
				title:req.body.project_title[i],
				description:req.body.project_description[i],
				technologies:req.body.project_technologies[i],
				submission:req.body.project_submission[i],
				link:req.body.project_link[i],
				git:req.body.project_git[i]
			}
			if(project.title){
				user.projects.push(project)
			}
		}
	}else{
		project={
				title:req.body.project_title,
				description:req.body.project_description,
				technologies:req.body.project_technologies,
				submission:req.body.project_submission,
				link:req.body.project_link,
				git:req.body.project_git
			}
			if(project.title){
				user.projects.push(project)
			}
	}
	if(req.body.skills.constructor===Array){
		user.skills=req.body.skills.slice()
	}else{
		user.skills.push(req.body.skills)
	}
	if(req.body.activities.constructor===Array){
		user.activities=req.body.activities.slice()
	}else{
		user.activities.push(req.body.activities)
	}
	var User = new models.user(user)
	User.save((err,doc)=>{
		if(err){
			res.send(err.message)
		}else{res.redirect("/users/"+doc._id)}
	})
}
var getNewUserForm = (req,res)=>{
	res.render('../Views/newUser.ejs');
}
var update = (req,res)=>{
	switch(req.params.field){
		case "about":
			about = {"objective":req.body.objective,
				"moto" : req.body.moto,
				"long" : req.body.long,
				"hobbies" : req.body.hobbies
			}
			for(i =0; i<about.hobbies.length;i++){
				if(about.hobbies[i]==''){
					about.hobbies.splice(i,1);
					i=i-1
				}
			}
			models.user.update({_id:req.params.userid},
				{$set:{about}}).exec((err,doc)=>{
					res.redirect('/users/'+req.params.userid)})
			break;
		case "activities":
			for(i=0;i<req.body.activities.length;i++){
				if(req.body.activities[i]==''){
					req.body.activities.splice(i,1)
				}
			}
			models.user.update({_id:req.params.userid},{$set:{activities:req.body.activities}}).exec((err,doc)=>{
					res.redirect('/users/'+req.params.userid)})
			break;
		case "address":
			models.user.update({_id:req.params.userid},{$set:{address:req.body}}).exec((err,doc)=>{
					res.redirect('/users/'+req.params.userid)});
			break;
		case "contact":
			models.user.update({_id:req.params.userid},{$set:{contact:req.body}}).exec((err,doc)=>{
					res.redirect('/users/'+req.params.userid)});
			break;
		case "education":
			education=[];
			if(req.body.degree.length == req.body.board.length){
				for(i in req.body.degree){
					if(req.body.degree[i]==''||req.body.board[i]==''||req.body.score[i]==''){
						continue
					}
					edu={degree:req.body.degree[i],
						board:req.body.board[i],
						score:req.body.score[i]}
					education.push(edu);
				}
			}else{
				edu={degree:req.body.degree,
						board:req.body.board,
						score:req.body.score}
					education.push(edu);
			}
			models.user.update({_id:req.params.userid},{$set:{education}}).exec((err,doc)=>{
					res.redirect('/users/'+req.params.userid)});
			break;
		case "experience":
			experience=[]
			if(req.body.position.length == req.body.organisation.length){
				for(i in req.body.position){
					if(req.body.position[i]==''||req.body.organisation[i]==''){
					continue
				}
					exp={position:req.body.position[i],
						organisation:req.body.organisation[i],
						description:req.body.description[i]
					}
					experience.push(exp);
				}
			}else{
				exp={position:req.body.position,
						organisation:req.body.organisation,
						description:req.body.description
					}
					experience.push(exp);
			}
			models.user.update({_id:req.params.userid},{$set:{experience}}).exec((err,data)=>{
				res.redirect('/users/'+req.params.userid);
			});
			break;
		case "name":
			name = {"first":req.body.first,
				"middle":req.body.middle,
				"last":req.body.last		
			}
			models.user.update({_id:req.params.userid},{"$set":{name}}).exec((err,doc)=>{
				res.redirect("/users/"+req.params.userid)});
			break;
		case "projects":
			projects=[];
			if(req.body.title.length == req.body.description.length){
				for(i in req.body.title){
					if(req.body.title[i]==''||req.body.description[i]==''){
						continue
					}
					project = {	title : req.body.title[i],
						description : req.body.description[i],
						technologies:req.body.technologies[i],
						submission:req.body.submission[i],
						link:req.body.link[i],
						git:req.body.git[i]
					}
					projects.push(project)
				}
			}else{
				project = {	title:req.body.title,
						description:req.body.description,
						technologies:req.body.technologies,
						submission:req.body.submission,
						link:req.body.link,
						git:req.body.git
					}
					projects.push(project)
			}
			models.user.update({_id:req.params.userid},{"$set":{projects}}).exec((err,doc)=>{
				res.redirect("/users/"+req.params.userid)});
			break;
		case "skills":
			for(i=0;i<req.body.skills.length;i++){
				if(req.body.skills[i]==''){
					req.body.skills.splice(i,1)
				}
			}
			models.user.update({_id:req.params.userid},{"$set":{skills:req.body.skills}}).exec((err,doc)=>{
				res.redirect("/users/"+req.params.userid)});
			break;
	}
}
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
	getUsers, getUser, getUserForm,update, getNewUserForm, postNewUserForm, getAbout, getContact, 
	getEducation, getProjects, getProject, 
	getExperience, 
};