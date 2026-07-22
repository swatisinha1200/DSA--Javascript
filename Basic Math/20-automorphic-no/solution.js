let n = 25;
let square = n * n;
let digits = 0;
let temp = n;
while (temp > 0) {
  digits++;
  temp = Math.floor(temp / 10);
}
let lastDigits = square % Math.pow(10, digits);
if (lastDigits === n) {
  console.log("Automorphic Number");
} else {
  console.log("Not an Automorphic Number");
}
