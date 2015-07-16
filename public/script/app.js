
var app = {

	products:[],
	initialize:function(){

		app.getProducts();

	},
	getProducts: function(){

		$.get('http://localhost:3000/products', function(productsResponse){

			app.products = productsResponse;
			app.renderProducts(productsResponse);

		});

	},
	renderProducts:function(products){

		var container = $('.products-container');

		for(var i=0;i<products.length;i++){

			var productData = products[i];

			var productContainer = $('<div>', {class:'product'});
			var name = $('<h5>', {text:productData.name});
			var price = $('<p>', {text:'Price: '+productData.price});
			var stock = $('<p>', {text:'Stock: '+productData.stock});

			productContainer.append(name, price, stock);

			container.append(productContainer);

		}

	}

};

$(document).ready(app.initialize);








