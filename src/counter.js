export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

// function fac(n) {
//   if (n < 3) return n;
//   return n * fac(n - 1);
// }

// // For containing the worker code
// const blob = new Blob([workerCode], { type: 'text/javascript' });

// // Create a URL for the blob
// const workerURL = URL.createObjectURL(blob);

// Create a new worker using the blob URL

// const nbrs = Array.from({ length: 100 }, (_, k) => ++k);

// const computed = new Map();

// function fib(n) {
//   return (function memo(n) {
//     if (computed.has(n)) return computed.get(n);
//     if (n < 2) return computed.set(n, BigInt(n)).get(n);
//     return computed.set(n, BigInt(memo(n - 1) + memo(n - 2))).get(n);
//   })(n);
// }

// nbrs.forEach((x, i) => {
//   console.log('fib(%d) = %d', i, fib(x));
// });

// computed.clear();
