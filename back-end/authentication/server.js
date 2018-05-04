var express = require('express'),
    app = express(),
    port = process.env.PORT || 4400,
    mongoose = require('mongoose'),
    AuthenModel = require('./models/authen_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/authen');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/authen_routes');
routes(app);

app.listen(port);






