let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost/transac');
autoIncrement.initialize(connection);

let transactionSchema = new Schema({
    date_buy : {type: String, required: true},
    buy_status: {type: Boolean, required: true},
    order_id: {type: String, required: true},
    user_id: {type: String, required: true},
    time_order: {type: String, required: true},
    basket: {type: Array, required: true}
});

transactionSchema.plugin(autoIncrement.plugin, 'Transaction')

module.exports = mongoose.model('Transaction', transactionSchema);



