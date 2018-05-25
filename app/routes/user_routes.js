const UserModel = require('../models/UserModel');

module.exports = function(app, db) {
	const User = db.model('User', UserModel.userSchema, 'users');

	app.post('/users', (req, res) => {
		var user = new User(req.body); 
		user.save((err) => {
			if (err) {		
				if (err.name === 'ValidationError')
					res.status(400).send( {'error' : 10000} );
				else if (err.code === 11000)
					res.status(400).send( {'error' : err.code} );
				else		
					res.status(500).send( { error : err.code } );
			}
			else {
				req.jobseeker.id = user._id;
				res.status(200).send();
			}
		});
	});

	app.post('/login', (req, res) => {
		User.findOne({username : req.body.username, password : req.body.password}, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send({'error' : err});
			}
			else {
				if (result) {
					req.jobseeker.id = result._id;
					res.status(200).send();
				}
				else
					res.status(403).send();
			}
		});
	
	});

	app.put('/users/:id', (req, res) => {
		User.update( {'_id' : req.params.id}, req.body, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {'error' : err} );
			}
			else 
				res.send(result);
		});
	});

	app.delete('/users/:id', (req, res) => {
		User.remove( {'_id' : req.params.id}, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {'error' : err} );
			}
			else
				res.send(result);
		});
	});
};
