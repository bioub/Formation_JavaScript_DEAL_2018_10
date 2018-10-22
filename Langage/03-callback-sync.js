const nbs = [2, 3, 4];

// Paradigme de programmation (style de programmtion)
// programmation fonctionnelle
// map, filter, reduce, forEach -> ES5 (IE9+)
nbs.filter((nb) => nb % 2 === 0)
   .map((nb) => nb ** 2)
   .forEach((nb) => console.log(nb));

console.log(nbs);

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
// acc: 0, nb: 2 => 0 + 2 => 2
// acc: 2, nb: 3 => 2 + 3 => 5
// acc: 5, nb: 4 => 5 + 4 => 9

console.log(sum);

function setTimeoutSync(callback, delayMs) {
  // PAUSE delayMs (le thread sera bloqué donc mauvaise pratique)
  const debut = Date.now(); // timestamp
  while (debut + delayMs > Date.now()) {}
  callback();
}

setTimeoutSync(() => {
  console.log('THREAD bloqué');
}, 1000);

console.log('Fin');


// pile d'appels
// ^
// |
// |
// |=> => =>   => =>  => =>    callback
// |filter     map    forEach  setTimeoutSync log
// +-----------------------------------------------> temps
// Sortie :           4  16    THREAD bloqué  Fin
