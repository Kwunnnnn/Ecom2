var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var adminSchema = new Schema({

    password: {type: String, require:true},
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true},
    peopleID: {type: String, require: true},
    tel: {type: String, require: true}


});

module.exports = mongoose.model('admin',adminSchema);