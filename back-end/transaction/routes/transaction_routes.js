module.exports = function (app) {
    let transactionControl = require('../controllers/transactionController');

    app.route('/create_transaction')
        .post(transactionControl.create_receipt);

    app.route('/get_transaction')
        .get(transactionControl.get_receipt);

    app.route('/clear_transaction')
        .delete(transactionControl.clear_transaction);
};