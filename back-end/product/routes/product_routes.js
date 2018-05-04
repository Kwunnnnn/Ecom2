module.exports = function (app) {
  let productList = require('../controllers/productController');

        app.route('/add_product')
            .post(productList.add_product);
};