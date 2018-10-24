let nb1 = 1;
let nb2 = nb1; // passage par valeur
nb1 = 2;

console.log(nb2); // 1

const obj1 = { nb: 1 };
const obj2 = obj1; // passage par référence
obj1.nb = 2;

console.log(obj2.nb); // 2
