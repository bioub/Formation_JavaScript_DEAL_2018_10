const fs = require('fs');

function log(file, msg, cb) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(file, line, cb);
}
log('app.log', 'Ligne 1', (err) => {
  if (err) {
    return console.log(err.message);
  }

  log('app.log', 'Ligne 2', (err) => {
    if (err) {
      return console.log(err.message);
    }

    log('app.log', 'Ligne 3', (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log('Done');
    });
  });
});
