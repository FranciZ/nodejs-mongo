var mongoose = require('mongoose');
var express = require('express');


module.exports = function(app){

	app.get('/products', function(request, response){

		var Product = mongoose.model('Product');

		Product.find(function(err, docs){

			response.send(docs);

		});
	
	});

	app.use('/', express.static('public'));


};