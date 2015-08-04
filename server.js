var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var server;

exports.startServer = function(cb){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());

	app.use(function(req, res, next){

		var userAgent = req.get('User-Agent');
		var search = userAgent.indexOf('Mac');

		if(search !== -1){

			//res.send('You have a mac, you are not welcome');
			
		}

		next();

	});

	server = app.listen(3426, function(){

		console.log('Server started');
		cb();

	});
};

exports.startRouter = function(){

	var router = require('./routes');

	router(app);

};








