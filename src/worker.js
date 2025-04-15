const nbrs = Array.from({ length: 100000 }, (_, k) => ++k);
const memo = new Map();

function fib(n) {
  if (memo.has(n)) return memo.get(n);
  if (n < 2) return memo.set(n, BigInt(n)).get(n);
  return memo.set(n, BigInt(fib(n - 1) + fib(n - 2))).get(n);
}

nbrs.forEach((x) => {
  postMessage({ i: x, value: fib(x) });
});

onmessage = ({ data }) => {
  let innerHTML = '';
  for (let i = 1; i < data.res.length; i++) {
    innerHTML += `fib(${i}) = ${data.res[i]} <br />`;
    if (i % 100 === 0) {
      postMessage({ innerHTML });
      innerHTML = '';
    }
  }
  postMessage({ innerHTML, done: true });
  innerHTML = '';
};

/*
function fac(n) {
  if(n < 3) return n;
  return n*fac(n-1);
}
nbrs.forEach(x=> {
  postMessage({i:x, value:fac(x)});
});
onmessage = ({data})=> {
  for (let i=1; i<data.length; i++) {
      console.log('%s -> %d', i, data[i])
  }
}*/
