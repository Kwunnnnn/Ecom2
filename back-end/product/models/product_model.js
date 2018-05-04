var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema ({
    id: {type: String, require: true},
    name: {type: String, require: true},
    size: {type: String},
    price: {type: Number, require: true},
    category: {type: String, require: true},
    description: {type: String, require: true
    }
});

module.exports = mongoose.model('product',productSchema);