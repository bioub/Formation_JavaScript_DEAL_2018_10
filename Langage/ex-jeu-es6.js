const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max ) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
};

const readline = require('readline');
const chalk = require('chalk');

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

const game = new Jeu({
  min: 10,
  max: 20,
});
game.jouer();
