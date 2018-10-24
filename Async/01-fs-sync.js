const fs = require('fs');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(file, line);
}

console.time('Done');
try {
  log('app.log', 'Ligne 1');
  log('app.log', 'Ligne 2');
  log('app.log', 'Ligne 3');
  console.timeEnd('Done');
}
catch (err) {
  console.log(err.message);
}


// pile d'appels
// ^
// |
// |
// |appendFileSync  appendFileSync
// |log             log
// 0----------------2ms----------------------> temps
// Sortie :
