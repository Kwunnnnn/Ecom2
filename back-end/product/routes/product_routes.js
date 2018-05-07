module.exports = function (app) {
  let productList = require('../controllers/product_controller');

  		// Get method
  		app.route('/products')
  			.get(productList.products);

  		app.route('/product/:id')
        	.get(productList.product);

        app.route('/product_category/:category')
        	.get(productList.product_category);

        app.route('/clear_product')
        	.delete(productList.clear_product);

        app.route('/get_stock/:id')
        	.get(productList.get_stock),


        // Post method
        app.route('/add_product')
            .post(productList.add_product);

        app.route('/delete_product/:id')
        	.delete(productList.delete_product);

        app.route('/edit_product/:id')
        	.post(productList.edit_product);

        app.route('/decrease_stock')
        	.post(productList.decrease_stock);

        app.route('/increase_stock')
        	.post(productList.increase_stock);

        app.route('/get_all_product')
			.get(productList.get_all_product);

};