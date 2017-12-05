//***********************************************
//				Imports
//***********************************************
var mongoose = require('mongoose');

//***********************************************
mongoose.connect('mongodb://localhost/jatin-katyal-nodejs');
//***********************************************
//				Models
//***********************************************
var projects = mongoose.model('projects',{
	name : String});

var skills = mongoose.model('skills',{
	name : String});

module.exports = {
	projects,skills
}