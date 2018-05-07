var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema ({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    stock: {type: Number, required:true},
    price: {type: Number, required: true},
    category: {type: Number, required: true},
    description: {type: String, required: true},
    size: {type: String},
    image_profile: {type: String},
    image_shows: {type: String}
});

module.exports = mongoose.model('product',productSchema);