var server = require('./server');
var database = require('./database');
var mongoose = require('mongoose');

database.openDatabase(function(){

	var product = require('./models/product');

	updateProduct('55a530e29bb02d7b424f67ae');

	server.startServer(function(){
		server.startRouter();
	});

});

function updateProduct(id){

	var Product = mongoose.model('Product');

	Product.findByIdAndUpdate(id, { name:'Lame product', stock:0 }, function(err, doc){

		console.log(err);
		console.log('Updated document: ',doc);

	});

}

function createProduct(){

	var Product = mongoose.model('Product');

	var product = new Product(
		{ 
			name:'Super Awesome Product',
			price:100,
			stock:4
		}
	);

	product.save(function(err, doc){

		console.log('Error: ', err);
		console.log('Document :', doc);

	});

}

function getProducts(){

	var Product = mongoose.model('Product');

	Product.find(function(err, docs){

		console.log('Error: ',err);
		console.log('Documents: ',docs);

	});

}








