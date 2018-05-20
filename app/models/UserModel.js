var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.userSchema = Schema({
	username : String,
	password : String,
});
