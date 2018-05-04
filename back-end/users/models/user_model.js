var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    email: {type: String, require: true},
    password: { type: String, require: true},
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    gender: {type: Boolean, require: true},
    dob: {type: Date, require: true},
    address_number: {type: String, require: true},


});

module.exports = mongoose.model('user',userSchema);