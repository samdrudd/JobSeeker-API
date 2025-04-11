const express		= require('express');
const cors  		= require('cors');
const mongoose		= require('mongoose');
const bodyParser	= require('body-parser').urlencoded({ extended: true });
const db			= require('./config/db');

const app			= express();

const port 			= process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser);

var database = mongoose.createConnection(db.url);

require('./app/routes')(app, database);

app.listen(port, () => {
	console.log('server lives');
});
