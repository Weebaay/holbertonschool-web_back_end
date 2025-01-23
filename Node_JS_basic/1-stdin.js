console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Récupère l'entrée utilisateur
  console.log(`Your name is: ${name}`);
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
