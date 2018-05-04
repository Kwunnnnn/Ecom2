let mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.add_product = function (req,res) {
    let new_product = new Product(req.body);
    new_product.save(function (req, res) {
        if(err) {
            return res.status(500).send(err);
        }
        return res.send("Added Product");
    });

};