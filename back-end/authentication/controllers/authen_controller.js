let mongoose = require('mongoose');
let crypto = require('crypto');
let http = require('http');


exports.check_password = function (req, res) {

    let md5 = crypto.createHash('md5');
    http.get('http://localhost:4000/get_users/' + req.params.email, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            console.log(data);
            let req_password = String(req.body.password);
            let pass = md5_encryption(req_password);
            if(pass === data.password){
                return resp.status(200).send("Login successful");
            }
        });
    }).on("error",(err) => {
        console.log("Error: " + err.message);
        return res.status(500).send("Not user in DB");
    });
};

exports.create_user = function (req, res) {
    let request = require('request');
    req.body.password = md5_encryption(req.body.password);
    request.post({
        url: 'http://localhost:4000/create_user',
        method: 'POST',
        json: req.body
    }), function (err) {
        if(err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send("Create successful");
        }
    }
};


let md5_encryption  = function (password) {
    let md5 = crypto.createHash('md5');
    md5.update(password);
    return password = md5.digest('hex');
};

