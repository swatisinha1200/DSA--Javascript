function pascalTriange(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 0; k <= i; k++) {
      row += nCr(i, k) + " ";
    }
    console.log(row);
  }
}
pascalTriange(5);
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
