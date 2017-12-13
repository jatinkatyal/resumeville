//***********************************************
//				Imports
//***********************************************
var users = require('./user.controller.js');

//***********************************************
//				Controllers
//***********************************************
var getHome =(req,res)=>{
	res.render('../Views/homepage.ejs');
};

module.exports = {
	users, getHome
}