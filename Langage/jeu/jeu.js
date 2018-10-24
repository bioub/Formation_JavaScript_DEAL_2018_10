// (function (exports, require, module, __filename, __dirname) {
'use strict';
const readline = require('readline'); // dans le programme Node.js
const chalk = require('chalk'); // dossier dans node_modules installé avec npm
const random = require('./random'); // fichier du projet

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
    // Object.assign(this, { min: 0, max: 100 }, options);

    this._rl = readline.createInterface(process.stdin, process.stdout);
    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      console.log(`Vous avez déjà joué : ${this._essais.join(' | ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné'));
      this._rl.close();

    });
  }
}

module.exports = Jeu;

// });
