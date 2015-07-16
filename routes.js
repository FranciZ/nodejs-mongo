var mongoose = require('mongoose');
var express = require('express');


module.exports = function(app){

	// list of all the products
	app.get('/products', function(request, response){

		var Product = mongoose.model('Product');
		Product.find(function(err, docs){

			response.send(docs);

		});
	
	});

	// get one product by id
	app.get('/products/:id', function(request, response){



	});

	app.post('/products', function(request, response){

		var Product = mongoose.model('Product');
		var product = new Product(request.body);

		product.save(function(err, doc){

			response.send(doc);

		});

	});

	app.delete('/products/:id', function(request, response){

		var id = request.params.id;
		var Product = mongoose.model('Product');

		Product.findByIdAndRemove(id, function(err, doc){

			response.send(doc);

		});


	});


	app.put('/products/:id', function(request, response){

		

	});

	app.use('/', express.static('public'));


};







