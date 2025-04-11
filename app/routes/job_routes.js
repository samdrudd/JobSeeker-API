const JobModel = require('../models/JobModel');

module.exports = function(app, db) {
	const Job = db.model('Job', JobModel.jobSchema, 'jobs');
	
	app.post('/jobs', (req, res) => {
		var job = new Job(req.body); 
		//job.user_id = req.jobseeker.id;
		
		job.save().then((savedDoc) => {
			res.status(201).json(savedDoc);
		})
		.catch((error) => {
			console.error('Error saving job:' + error);
			res.status(500).json({message: 'Error saving job', error : error.message});
		});
	});


	app.get('/jobs/:id', (req, res) => {
		Job.findById(req.params.id).then((foundDoc) => {
			if (foundDoc)
			    res.status(200).send(foundDoc);
            else
                res.status(404).json({message: "Job not found"});
		})
		.catch((error) => {
			console.error('Error finding job: ' + error);
			res.status(500).json({message: 'Error finding job', error : error.message});
		});
	});

	app.get('/jobs', (req, res) => {
		Job.find({}).then((results) => {
			res.send(results);
		})
		.catch((error) => {
			console.error('Error finding jobs: ' + error);
			res.status(500).json({message: 'Error finding jobs', error : error.message});
		});
	
	});

	app.put('/jobs/:id', (req, res) => {
        Job.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((savedDoc) => {
            if (savedDoc)
			    res.send(savedDoc);
            else
                res.status(404).json({message: 'Job not found'});
		})
        .catch(error => {
            console.log('Error updating job: ' + error);
            res.status(500).json({message: 'Error updating job', error: error.message});
        });
	});

	app.delete('/jobs/:id', (req, res) => {
		Job.findByIdAndDelete(req.params.id).then((deletedDoc) => {
            if (deletedDoc)
			    res.send(deletedDoc);
            else
                res.status(404).json({message: "Job not found"});
		})
        .catch(error => {
            console.log("Error deleting job: " + error);
            res.status(500).json({message: "Error deleting job", error: error.message});
        });
	});
};
