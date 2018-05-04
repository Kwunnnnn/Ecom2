var express = require('express'),
    app = express(),
    port = process.env.PORT || 4300,
    mongoose = require('mongoose'),
    TransactionModel = require('./models/transaction_model'),
    bodyParser = require('body-parser'),
    cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/transac');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require('./routes/transaction_routes');
routes(app);

app.listen(port);






