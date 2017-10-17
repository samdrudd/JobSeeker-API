var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.jobSchema = Schema({
		dateApplied : Date,
		jobTitle : String,
		company : String,
		location : String,
		website : String 
});
