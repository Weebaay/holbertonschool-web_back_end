const countStudents = require('./3-read_file_async');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
	return;
});
app.get('/students', (req, res) => {
	countStudents('database.csv')
	.then((result) => {
		let output = 'This is the list of our students\n';
		output += result;
		res.send(output.trim());
	 })
	   .catch((error) => {
		res.status(500).send('Cannot load the database');
	   });
});

app.listen(1245, () => {
	console.log("Server running on port 1245");
})