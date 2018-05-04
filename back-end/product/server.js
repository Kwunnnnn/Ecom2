let express = require('express'),
    app = express(),
    port = process.env.PORT || 4001,
    mongoose = require('mongoose'),
    ProductModel = require('../product/models/product_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ProductDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/product_routes');
routes(app);

app.listen(port);






