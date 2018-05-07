let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    gender: {type: Boolean, required: true},
    dob: {type: String, required: true},
    address_number: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);