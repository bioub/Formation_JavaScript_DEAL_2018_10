// (function (exports, require, module, __filename, __dirname) {
'use strict';
// Module CommonJS
const Jeu = require('./jeu');

const game = new Jeu({
  min: 10,
  max: 20,
});
game.jouer();
// });
