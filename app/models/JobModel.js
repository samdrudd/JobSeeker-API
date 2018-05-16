var mongoose = require('mongoose');

module.exports.jobSchema = mongoose.Schema({
		date: {
			type: Date,
			required: true
		},
		status: {
			type: String,
			enum: ["Applied", "Interviewed", "Offer Received", "Rejected"]
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
