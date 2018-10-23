const fs = require('fs');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.promises.appendFile(file, line);
}

(async () => {

  try {
    await log('app.log', 'Ligne 1');
    await log('app.log', 'Ligne 2');
    await log('app.log', 'Ligne 3');
    console.log('Done');
  }
  catch (err) {
    console.log(err.message);
  }

})();

