//***********************************************
//			Imports
//***********************************************
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var routes = require('./Routes')
var bodyParser = require('body-parser');

//***********************************************
var app = express();

//***********************************************
//			Middlewares
//***********************************************
app.use((req,res,next)=>{
	console.log(req.method,req.url);
	next();
});
app.use(express.static(
		path.join(__dirname,'./Statics')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes);
app.engine('html',ejs.renderFile);


//***********************************************
//			Start Listening
//***********************************************
app.listen(3000,()=>{
	console.log('App started at port 3000.');
});