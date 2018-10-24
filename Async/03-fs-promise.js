const fs = require('fs');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.promises.appendFile(file, line);
}

console.time('Done');
log('app.log', 'Ligne 1')
  .then(() => log('app.log', 'Ligne 2'))
  .then(() => log('app.log', 'Ligne 3'))
  .then(() => console.timeEnd('Done'))
  .catch((err) => {
    console.log(err.message);
  });
// pile d'appels
// ^
// |
// |                 appendFile
// |appendFile       log
// |log        ..... =>
// 0-----------------3ms---------------------> temps
// Sortie :
