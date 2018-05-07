let mongoose = require('mongoose');
let	Admin = mongoose.model('admin');

exports.delete_all_user = function (req, res) {
    Admin.remove({}, function (err) {
        if(err) {
           return res.status(500).send(err);
        }
        else {
           return res.status(200).send("clear successful!")
        }
    });
};

exports.get_all_usersOfAdmin = function (req, res) {
    Admin.find({}, function (err, admin) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(admin);
        }
    });
};

exports.get_all_admin = function (req, res) {
    Admin.find({}, function (err, admin) {
        if(err) {
           return res.status(500).send(err);
        }
        else {
           return res.status(200).send(admin);
        }
    });
};

exports.add_admin = function (req, res) {
    let new_admin = new Admin(req.body);
    new_admin.save(function (err, admin) {
        if (err) {
            return res.status(500).send(err);
        }
        else {
           return res.status(200).send(admin);
        }
    });
};

exports.delete_user = function (req, res) {
    Admin.deleteOne({email: req.params}, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send('delete successful!');
        }
    });
};