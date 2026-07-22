let n = 9;
let square = n * n;
let sum = 0;
while (square > 0) {
  let digit = square % 10;
  sum = sum + digit;
  square = Math.floor(square / 10);
}
if (sum === n) {
  console.log("Neon Number");
} else {
  console.log("Not a Neon Number");
}
