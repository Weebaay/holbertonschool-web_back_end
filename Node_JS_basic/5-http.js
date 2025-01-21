const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
    return;
  }
  if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents('database.csv')
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
    return;
  }
  res.write('404 Not Found');
  res.end();
});

server.listen(1245);

module.exports = server;