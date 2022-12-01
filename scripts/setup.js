require('dotenv').config()
var Student = require('../app/models/student'); // get our mongoose model

var mongoose = require('mongoose');
// connect to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to Database")
	});

// Clear users
Student.remove().then(() => {
	var antonio = new Student({
		email: 'antbucc@gmail.com',
		password: '123'
	});
	return antonio.save();
}).then(() => {
	console.log('User antbucc@gmail.com saved successfully');
}).then(() => {
	var mario = new Student({
		email: 'mario.rossi@unitn.com',
		password: '123'
	});
	return mario.save();
}).then(() => {
	console.log('User mario.rossi@unitn.com saved successfully');
	process.exit();
});
