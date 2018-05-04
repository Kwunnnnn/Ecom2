var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema ({
    id: {type: String, require: true},
    name: {type: String, require: true},
    stock: {type: Number, require:true}
    price: {type: Number, require: true},
    category: {type: Number, require: true},
    description: {type: String, require: true},
    size: {type: String},
    image_profile: {type: String},
    image_shows: {type: Array}
});

module.exports = mongoose.model('product',productSchema);