let mongoose = require('mongoose')
let Product = mongoose.model('product');

exports.add_product = function (req,res) {
	console.log('add product was request');
    let new_product = new Product(req.body);
    new_product.save(function (req, res) {
        if(err) {
        	console.log('error add product');
            return res.status(500).send(err);
        }
        console.log('added product')
        return res.send("Added Product");
    });
};

