const express		= require('express');
const cors  		= require('cors');
const mongoose		= require('mongoose');
const bodyParser	= require('body-parser');
const sessions		= require('client-sessions');
const db			= require('./config/db');

const app			= express();

const port 			= 8000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessions({
	cookieName : 'jobseeker',
	secret : '911kjd2klasjd0q2laksfmlo3ifmaoi3faiw3faowfmoaiwm3ofimw'
}));

var database = mongoose.createConnection(db.url);

require('./app/routes')(app, database);

app.listen(port, () => {
	console.log('server lives');
});
