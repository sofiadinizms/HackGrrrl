import { list } from 'keystone';
const User = list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'admin',
		email: 'admin@gmail.com',
		password: 'admin',
		canAccessKeystone: true,
	}).save(done);
};
