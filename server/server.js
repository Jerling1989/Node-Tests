const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page Not Found.',
		name: 'Todo App v1.0'
	});
});


app.get('/users', (req, res) => {
	res.send([
		{name: 'Jacob', age: 28},
		{name: 'Andrew', age: 24},
		{name: 'Jordan', age: 35}
	]);
});


app.listen(3000);
module.exports.app = app;