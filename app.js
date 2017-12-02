var express = require('express');
var app = express();

var routes = require('./Routes')

app.use('/',routes);

app.listen(3000,()=>{
	console.log('App started at port 3000.');
});