var express = require('express');
var path = require('path');

var app = express();

var routes = require('./Routes')

app.use((req,res,next)=>{
	console.log(req.method,req.url);
	next();
})

app.use(express.static(path.join(__dirname,'./Statics')));

app.use('/',routes);

app.listen(3000,()=>{
	console.log('App started at port 3000.');
});