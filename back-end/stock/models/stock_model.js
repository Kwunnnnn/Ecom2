let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let stockSchema = new Schema({
   quality: {type: Number,require: true},
   img: {type: [String],require: true}
});