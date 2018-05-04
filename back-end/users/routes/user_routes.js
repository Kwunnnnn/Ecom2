module.exports = function (app) {
	let userControl = require('../controllers/user_controller');

	app.route('/create_user')
		.post(userControl.create_user);

	app.route('/edit_user')
		.post(userControl.edit_user);

	app.route('/get_all_users')
		.get(userControl.get_all_users);

	app.route('/get_users/:user_email')
		.get(userControl.get_users);

};