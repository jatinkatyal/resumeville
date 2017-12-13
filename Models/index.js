//***********************************************
//				Imports
//***********************************************
var mongoose = require('mongoose');
var schemas = require('./schemas');

//***********************************************
mongoose.connect('mongodb://localhost/jatin-katyal-nodejs');

//***********************************************
//				Models
//***********************************************
var user = mongoose.model('users',schemas.users);
var projects = mongoose.model('projects',{
	name : String});

var skills = mongoose.model('skills',{
	name : String});
var education = mongoose.model('education',{
	degree:String,
	board:String,
	score:String
});

//***********************************************
//				Export
//***********************************************
module.exports = {
	user,schemas
}