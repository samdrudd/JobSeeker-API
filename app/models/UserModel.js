var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.userSchema = Schema({
	username : { 
		type : String,
		unique : true
	},
	password : String
});
