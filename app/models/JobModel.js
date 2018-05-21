var mongoose = require('mongoose');

module.exports.jobSchema = mongoose.Schema({
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		date: {
			type: Date,
			required: true
		},
		status: {
			type: String,
			enum: ["applied", "interviewed", "offered", "rejected"]
		},
		title: {
			type: String,
			required: true
		},
		company: {
			type: String,
			required: true
		},
		location: {
			type: String,
			required: true
		},
		via: { 
			type: String,
			required: true
		}
});
