const UserModel = require('../models/UserModel');

module.exports = function(app, db) {
	const User = db.model('User', UserModel.userSchema, 'users');

	app.post('/users', (req, res) => {
		var user = new User(req.body); 
		user.save((err) => {
			if (err) {
				console.log(err);
				res.status(500).send( {'error' : err} );
			}
			else
				res.send(user);
		});
	});


	app.get('/users/:id', (req, res) => {
		User.findById(req.params.id, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({'error' : err});
			}
			else
				res.send(results);
		});
	});
	
	app.get('/users', (req, res) => {
		User.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({'error' : err});
			}
			else 
				res.send(results);
		});
	});


	app.post('/login', (req, res) => {
		User.find({username : req.body.username, password : req.body.password}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({'error' : err});
			}
			else {
				res.send(results);
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
