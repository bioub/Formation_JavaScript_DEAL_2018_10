const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = parseInt(answer);
    console.log('Vous avez saisi ' + entierSaisi);
    // rejouer
    jouer();
    // fin de partie
    // rl.close();
  });
}

jouer();
// pile d'appels
// ^               question        question
// |question       jouer           jouer
// |jouer    ..... =>       .....  =>
// 0-----------------------------------------> temps
// Sortie :

