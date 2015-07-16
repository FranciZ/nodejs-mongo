
var app = {

	products:[],
	initialize:function(){

		app.getProducts();
		app.setEvents();

	},
	setEvents:function(){

		$('#add-button').on('click', app.addProduct);

	},
	getProducts: function(){
		//      update  create	
		// get,   put,   post,   delete
		$.get('/products', 
			function(productsResponse){

				console.log(productsResponse);

			app.products = productsResponse;
			app.renderProducts(productsResponse);

		});

	},
	addProduct:function(){

		var nameValue = $('#name').val();
		var priceValue = $('#price').val();

		console.log(nameValue);
		console.log(priceValue);

		$.post('/products', 
			{ 
				name 	: nameValue, 
				price 	: priceValue 
			}, function(productResponse){

				app.products.push(productResponse);

				app.renderProducts(app.products);

			});

	},
	deleteProduct:function(){

		console.log($(this).attr('id'));

		var id = $(this).attr('id');

		$.ajax({
			url:'/products/'+id,
			method:'DELETE',
			success:function(resDoc){

				for(var i=0;i<app.products.length;i++){
					if(resDoc._id === app.products[i]._id){

						app.products.splice(i,1);

					}
				}

				app.renderProducts(app.products);

			}
		});

	},
	renderProducts:function(products){

		var container = $('.products-container');

		container.empty();

		for(var i=0;i<products.length;i++){

			var productData = products[i];

			var productContainer = $('<div>', {class:'product'});
			var name = $('<h5>', {text:productData.name});
			var price = $('<p>', {text:'Price: '+productData.price});
			var stock = $('<p>', {text:'Stock: '+productData.stock});

			var deleteButton = $('<div>', 
				{
					text:'Delete', 
					class:'btn btn-danger product-delete', 
					id:productData._id
				});

			deleteButton.on('click', app.deleteProduct);

			productContainer.append(name, price, stock, deleteButton);

			container.append(productContainer);

		}

	}

};

$(document).ready(app.initialize);








