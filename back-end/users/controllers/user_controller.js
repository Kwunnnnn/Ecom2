let mongoose = require('mongoose');
let	User = mongoose.model('User');

exports.create_user = function (req, res) {
    console.log(req.body);
    let new_user = new User(req.body);
    new_user.save(function (err, user) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    });
};
exports.edit_user = function (req, res) {
    User.findOneAndUpdate(req.body.id, {
        "address_number" : req.body.address_number},
        function (err, user) {
            if(err) {
                return res.status(500).send(err);
        }
        else {
                return res.status(200).send("okkkkkkkk");
            }
    });
};

exports.get_all_users = function (req, res) {
    User.find({},function (err, user) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(user);
        }
    });
};

exports.get_users = function (req, res) {
    User.findOne({email: req.params.email},function (err, user) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            console.log(user);
            return res.status(200).send(user);
        }
    })
};

exports.clear_user = function (req, res) {
    User.remove({}, function (err) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send("clear complete");
        }
    });
};




