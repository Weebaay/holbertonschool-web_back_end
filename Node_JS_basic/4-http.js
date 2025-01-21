const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

server.listen(1245);
console.log('connexion sur le port 1245!');
