module.exports = function (app) {
  let productList = require('../controllers/product_controller');

  		// Get method
  		app.route('/products')
  			.get(productList.get_all_products);

  		app.route('/product/:product_id')
        	.get(productList.get_product);

        app.route('/products_category/:category_number')
        	.get(productList.get_product_category);

        app.route('/clear_product')
        	.get(productList.clear_product);

        app.route('/get_stock/:product_id')
        	.get(productList.get_stock)

        app.route('/check_stock/:product_id')
        	.get(productList.check_stock)

        // Post method
        app.route('/add_product')
            .post(productList.add_product);

        app.route('/delete_product')
        	.post(productList.delete_product);

        app.route('/edit_product')
        	.post(productList.edit_product);

        app.route('/decrease_stock')
        	.post(productList.decrease_stock);

        app.route('/increase_stock')
        	.post(productList.increase_stock);

};