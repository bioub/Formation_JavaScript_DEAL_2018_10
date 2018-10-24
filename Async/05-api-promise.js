/*
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log('3s');
    }, 1000);
  }, 1000);
}, 1000);
*/

/*
timeout(1000)
  .then(() => timeout(1000))
  .then(() => timeout(1000))
  .then(() => console.log('3s'))
*/

function timeout(delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

function randomTimeout() {
  return timeout(Math.floor(Math.random() * 1001));
}
/*
(async () => {
  await timeout(1000);
  await timeout(1000);
  await timeout(1000);
  console.log('3s');
})();
*/


(async () => {
  const [delay1, delay2] = await Promise.all([
    randomTimeout(),
    randomTimeout(),
  ]);
  console.log(delay1 + 'ms');
  console.log(delay2 + 'ms');
})();
