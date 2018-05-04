module.exports = function (app) {
	let userControl = require('../controllers/user_controller');

	app.route('create_user')
		.post(userControl.create_user);


};