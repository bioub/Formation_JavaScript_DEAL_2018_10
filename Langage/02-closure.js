function externe(msg) {
  // porté de closure sauvegardée
  // 1 - une fonction dans une portée (fonction, bloc depuis ES6)
  // 2 - la fonction interne doit être appelée en dehors
  function interne() {
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello');
hello();

// pile d'appels
// ^
// |
// |
// |          log
// |externe - interne
// +-----------------------------------------------> temps

/*
function createButton(value) {
  const btn = document.createElement('button');
  btn.innerHTML = value;
  value = null;
  btn.addEventListener('click', () => {
    console.log(value); // Ajouter (au moment du click)
  });
}

createButton('Ajouter');
*/

// Dans 1 sec : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Dans 1 sec : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1 sec : 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
