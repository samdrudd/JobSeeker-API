var mongoose = require('mongoose');

module.exports.jobSchema = mongoose.Schema({
		date : Date,
		title : String,
		company : String,
		location : String,
		via : String 
});
