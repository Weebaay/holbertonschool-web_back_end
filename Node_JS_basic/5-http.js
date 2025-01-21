const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((req, res) => {
  res.setHeaders('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
    return;
  }
  if (req.url === '/students') {
    res.writeHead(200);
    res.write('This is the list of our students\n');

    const databaseFile = process.argv[2]; // Récupérer le nom du fichier depuis les arguments

    if (!databaseFile) {
      res.end('Cannot load the database'); // Gérer le cas où aucun fichier n'est fourni
      return;
    }

    countStudents(databaseFile)
      .then((studentData) => {
        res.end(studentData);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(1245);

module.exports = server;
