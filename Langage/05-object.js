// au niveau du langage on manipule des objets préexistants
console.log('typeof Math', typeof Math); // object

// au niveau de Node.js
console.log('typeof process', typeof process); // object

// au niveau du navigateur
console.log('typeof document', typeof document); // object

// au niveau du navigateur et de Node.js
console.log('typeof console', typeof console); // object

// un objet en JavaScript est système clé/valeur (dictionnaire)
// pour accéder aux valeurs à partir de la clé on utilise . ou []
console.log(Math.PI);
console['log'](Math['PI']);
const method = 'log';
const property = 'PI';
console[method](Math[property]); // plus dynamique

// Extensibilité : possibilité d'ajouter / modifier / supprimer
// de nouvelles clés/valeurs
// MAUVAISE PRATIQUE de le faire sur des objets du natif
// (langage / navigateur / node.js)

console.log('Math.sum', Math.sum); // undefined
// ajouter
Math.sum = (a, b) => a + b;

// modifier
Math.sum = (a, b) => Number(a) + Number(b);

// supprimer
delete Math.sum;

// Pour créer un nouvel objet on peut utiliser les syntaxes

// methode : une fonction dans un objet
// propriété : une valeur dans un objet (autre qu'une fonction)

// object literal
// à utiliser si l'objet n'est créé qu'une fois
// ou s'il est créé plusieurs fois PAS DE FONCTION (pour pas les dupliquer)
const coords = {
  x: 10,
  y: 20,
};

coords.z = 30;

// constructor function (fonction constructeur)
// à utiliser si l'objet est créé plusieurs fois
function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je suis Romain

const eric = new Contact('Eric');
console.log(eric.prenom); // Eric
console.log(eric.hello()); // Bonjour je suis Eric

// boucler sur les clés d'un objet
for (let key in coords) {
  const value = coords[key];
  console.log(key, value);
}

// transformer un objet en type string et inversement avec JSON
// JSON : JavaScript Object Notation
// les méthodes n'existent plus en JSON
const str = JSON.stringify(coords);
// .... réseau ....
const coordsFromJSON = JSON.parse(str);
console.log(coordsFromJSON.z); // 30
