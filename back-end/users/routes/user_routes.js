module.exports = function (app) {
	let userControl = require('../controllers/user_controller');
    let adminControl = require('../controllers/admin_controller');

    app.route('/get_all_userOfAdmin')
        .get(adminControl.get_all_usersOfAdmin);

    app.route('/get_all_admin')
        .get(adminControl.get_all_admin);

    app.route('/add_admin')
        .post(adminControl.add_admin);

    app.route('/delete_user/:user_email')
        .delete(adminControl.delete_user);

    app.route('/delete_all_user')
        .delete(adminControl.delete_all_user);

	app.route('/create_user')
		.post(userControl.create_user);

	app.route('/edit_user')
		.post(userControl.edit_user);

	app.route('/get_all_users')
		.get(userControl.get_all_users);

	app.route('/get_users/:email')
		.get(userControl.get_users);

	app.route('/clear_user')
		.delete(userControl.clear_user);

};
