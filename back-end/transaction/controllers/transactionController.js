let mongoose = require('mongoose');
let Transaction = mongoose.model('Transaction');

exports.create_transaction = function (req, res) {
    let new_receipt = new Transaction(req.body);
    new_receipt.save(function (err, transaction) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            let order_ID = transaction._id + transaction.date_buy;
            let order_temp = order_ID.split("/");
            order_ID = order_temp[0] + order_temp[1] +order_temp[2];
            Transaction.findOneAndUpdate({'_id' : transaction._id}, {$set:{order_id:order_ID}}, {new: true}, function(err, doc){
                if(err){
                    return res.status(500).send(err);
                }
                else{
                    return res.status(200).send(doc);
                }
            });
        }
    });
};

exports.get_transaction = function (req, res) {
    Transaction.find({}, function (err, transac) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(transac);
        }
    });
};

exports.clear_transaction = function (req, res) {
    Transaction.remove({}, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send('delete successful');
        }
    });
};