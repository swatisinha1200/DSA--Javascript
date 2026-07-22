function factorial(n) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

function nCr(n, r) {
  let a = factorial(n);
  let b = factorial(r);
  let c = factorial(n - r);
  let ans = a / (b * c);
  return ans;
}

console.log(nCr(4, 2)); // 6
