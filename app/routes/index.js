const jobRoutes = require('./job_routes');

module.exports = function(app, db) {
	jobRoutes(app, db);
}
