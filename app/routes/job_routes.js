const JobModel = require('../models/JobModel');

module.exports = function(app, db) {
	const Job = db.model('Job', JobModel.jobSchema, 'jobs');
	
	app.post('/jobs', (req, res) => {
		var job = new Job(req.body); 
		job.user_id = req.jobseeker.id;
		
		job.save((err) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(job);
		});
	});


	app.get('/jobs/:id', (req, res) => {
		Job.findById(req.params.id, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results);
		});
	});

	app.get('/jobs', (req, res) => {
		Job.find({user_id : req.jobseeker.id}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results);
		});
	
	});

	app.put('/jobs/:id', (req, res) => {
		Job.update( {_id : req.params.id}, req.body, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(result);
		});
	});

	app.delete('/jobs/:id', (req, res) => {
		Job.remove( {_id : req.params.id, user_id : req.jobseeker.id}, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(result);
		});
	});
};
