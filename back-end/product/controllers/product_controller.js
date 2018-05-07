let mongoose = require('mongoose');
let Product = mongoose.model('product');

exports.add_product = function (req,res) {
	console.log('add product was request');
    let new_product = new Product(req.body);
    new_product.save(function (err, product) {
        if(err) {
        	console.log('error add product');
            return res.status(500).send(err);
        }
        console.log('added product');
        return res.status(200).send("Added Product");
    });
};

exports.clear_product = function (req, res) {
    Product.remove({}, function (err) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send("clear successful");
        }
    });
};

exports.products = function (req, res) {
    Product.find({}, function (err, product) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            console.log("find successful");
            res.status(200).send(product);
        }
    });
};

exports.decrease_stock = function (req, res) {
    let prod_id = req.body.prod_id;
    let buy_num = req.body.buy_num;
    Product.findOne({'id': prod_id}, function (err, prod) {
        if (err) {
            console.log("unsuccessfull");
            return res.status(500).send(err);
        }
        else {
            if(prod.stock - buy_num < 0) {
                return res.status(200).send("not enough product");
            } else {
                let stock_current = prod.stock - buy_num;
                console.log(stock_current);
                Product.findOneAndUpdate({'id': prod_id}, {$set:{stock: stock_current}}, {new:true}, function (err, prod) {
                    if(err){
                        console.log("unsuccessfull");
                        res.status(500).send(err);
                    }
                    return res.status(200).send(prod);
                });
            }
        }
    });
};

exports.increase_stock = function (req, res) {
    let prod_id = req.body.prod_id;
    let buy_num = req.body.buy_num;
    Product.findOne({'id': prod_id}, function (err, prod) {
        if (err) {
            console.log("unsuccessfull");
            return res.status(500).send(err);
        }
        else {

            let stock_current = prod.stock + buy_num;
            console.log(stock_current);
            Product.findOneAndUpdate({'id': prod_id}, {$set:{stock: stock_current}}, {new:true}, function (err, prod) {
                if(err){
                    console.log("unsuccessfull");
                    res.status(500).send(err);
                }
                return res.status(200).send(prod);
            });

        }
    });
};

exports.delete_product = function (req, res) {
    Product.deleteOne({id: req.params.id}, function (err) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send("delete successful");
        }
    });
};

exports.get_stock = function (req, res) {
    Product.findOne({id: req.params.id}, function (err, product) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(product);
        }
    });
};

exports.product = function (req, res) {
    Product.findOne({id: req.params.id}, function (err, product) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(product);
        }
    });
};

exports.product_category = function (req, res) {
    Product.findOne({category: req.params.category}, function (err, category) {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(category);
        }
    });
};

exports.edit_product = function (req, res) {
    Product.findOneAndUpdate({id: req.params.id}, {$set: req.body},{new:true}, function (err, product) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(product);
        }
    });
};

