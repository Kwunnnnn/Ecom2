let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    address_number: {type: String, required: true},
    user_status: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);