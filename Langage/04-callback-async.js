setTimeout(() => {
  console.log('0');
}, 0);

setTimeout(() => {
  console.log('A');
}, 1000);

setTimeout(() => {
  console.log('B');
}, 500);

setTimeout(() => {
  console.log('C');
}, 500);

console.log('Fin');

/*
setTimeout(() => {
  console.log('E');
}, Math.random() * 1001);

setTimeout(() => {
  console.log('F');
}, Math.random() * 1001);
*/


// pile d'appels
// ^
// |
// |
// |                                      log        log  log       log
// |stTmt  stTmt  stTmt  stTmt  log ..... cb0 ...... cbB  cbC ..... cbA
// 0--------------------------------------3----------501--503-------1001--> temps
// Sortie :                     Fin       0          B    C         A

// File d'attente :
// 0ms : cb0
// 3ms :
// 500ms : cbB - cbC
// 501ms : cbC
// 503ms :
// 1000ms : cbA
// 1001ms :
