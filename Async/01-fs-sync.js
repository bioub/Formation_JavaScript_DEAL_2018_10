const fs = require('fs');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(file, line);
}

try {
  log('app.log', 'Ligne 1');
  log('app.log', 'Ligne 2');
  log('app.log', 'Ligne 3');
  console.log('Done');
}
catch (err) {
  console.log(err.message);
}
