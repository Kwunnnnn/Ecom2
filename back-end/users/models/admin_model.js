var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var adminSchema = new Schema({

    password: {type: String, required:true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true,unique: true},
    peopleID: {type: String, required: true},
    tel: {type: String, required: true}


});

module.exports = mongoose.model('admin',adminSchema);