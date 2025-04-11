const jobRoutes = require('./job_routes');
//const userRoutes = require('./user_routes');

module.exports = function(app, db) {
	jobRoutes(app, db);
	//userRoutes(app, db);
}
