var express = require('express'),
    app = express(),
    port = process.env.PORT || 4200,
    mongoose = require('mongoose'),
    StockModel = require('./models/stock_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/stock');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/stock_routes');
routes(app);

app.listen(port);






