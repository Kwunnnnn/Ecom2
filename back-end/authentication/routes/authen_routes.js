module.exports = function (app) {
    let authenList = require('../controllers/authen_controller');

    app.route('/create_user')
        .post(authenList.create_user);

    app.route('/check_password/:email')
        .get(authenList.check_password);
};