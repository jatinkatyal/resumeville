//***********************************************
//				Imports
//***********************************************
var mongoose = require('mongoose');

//***********************************************
//				Schemas
//***********************************************
var name = new mongoose.Schema({
	first : {
		type: String,
		required : true
	},
	middle : String,
	last : {
		type: String,
		required : true
	}
});

var contact = new mongoose.Schema({
	mobile : {
		type: String,
		required : true
	},
	telephone : String,
	email : {
		type: String,
		required : true
	}
});

var address = new mongoose.Schema({
	streetAddress : {
		type: String,
		required : true
	},
	area : {
		type: String,
		required : true
	},
	district : {
		type: String,
		required : true
	},
	state : {
		type: String,
		required : true
	},
	pin : {
		type: String,
		required : true
	}
});

var about = new mongoose.Schema({
	objective : String,
	moto : String,
	long : {
		type: String,
		required: true
	},
	hobbies : [String]
});

var education = new mongoose.Schema({
	degree : {
		type: String,
		required : true
	},
	board : {
		type: String,
		required : true
	},
	score : {
		type: String,
		required : true
	}
});

var projects = new mongoose.Schema({
	title : {
		type: String,
		required : true
	},
	description : {
		type:String,
		required:true
	},
	technologies : String,
	submission : Date,
	link : String,
	git: String
});

var experience = new mongoose.Schema({
	position : {
		type: String,
		required : true
	},
	organisation : {
		type: String,
		required : true
	},
	description : String
});

var users = new mongoose.Schema({
	name, contact, address, about,
	education : [education],
	skills : [String],
	projects : [projects],
	experience : [experience],
	activities : [String]
});

//***********************************************
//				Export
//***********************************************
module.exports = {
	users, name, contact, address, about, 
	education, projects, experience
};