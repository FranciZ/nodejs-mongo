var express = require('express');
var mongoose = require('mongoose');
var app = express();
var server;

exports.startServer = function(cb){

	server = app.listen(3000, function(){

		console.log('Server started');
		cb();

	});
};

exports.startRouter = function(){

	var router = require('./routes');
	
	router(app);

};








