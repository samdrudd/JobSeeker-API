const express		= require('express');
const cors  		= require('cors');
const mongoose		= require('mongoose');
const bodyParser	= require('body-parser');
const sessions		= require('client-sessions');
const db			= require('./config/db');

const app			= express();

const port 			= process.env.PORT || 5000;


app.use(cors({
	origin : 'http://127.0.0.1:8080',
	credentials : true
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessions({
	cookieName : 'jobseeker',
	secret : '911kjd2klasjd0q2laksfmlo3ifmaoi3faiw3faowfmoaiwm3ofimw',
	duration : 24 * 60 * 60 * 1000,
	cookie : {
		httpOnly : false
	}
}));

var database = mongoose.createConnection(db.url);

require('./app/routes')(app, database);

app.listen(port, () => {
	console.log('server lives');
});
