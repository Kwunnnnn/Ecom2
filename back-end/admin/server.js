var express = require('express'),
    app = express(),
    port = process.env.PORT || 4500,
    mongoose = require('mongoose'),
    AdminModel = require('./models/admin_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/admin_routes');
routes(app);

app.listen(port);






