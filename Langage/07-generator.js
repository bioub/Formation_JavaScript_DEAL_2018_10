function *values() {
  yield 1;
  yield 2;
  yield 5;
}

let generator = values();

console.log(generator.next()); // 1
console.log(generator.next()); // 2

generator = values();

console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // 5


for (let value of values()) {
  console.log(value);
}
