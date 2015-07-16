var server = require('./server');
var database = require('./database');
var mongoose = require('mongoose');

database.openDatabase(function(){

	var product = require('./models/product');

	server.startServer(function(){
		server.startRouter();
	});

});