var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	// CHECK IF EMAIL ALREADY EXISTS
	db.saveUser({email, password});
	// SEND THE WELCOME EMAIL
};