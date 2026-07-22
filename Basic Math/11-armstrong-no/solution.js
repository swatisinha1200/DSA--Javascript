let n = 153;
let original = n;
let temp = n;
let digits = 0;
// Count digits
while (temp > 0) {
  digits++;
  temp = Math.floor(temp / 10);
}
// Calculate Armstrong sum
temp = n;
let sum = 0;
while (temp > 0) {
  let digit = temp % 10;
  sum = sum + Math.pow(digit, digits);
  temp = Math.floor(temp / 10);
}
if (sum === original) {
  console.log("Armstrong Number");
} else {
  console.log("Not Armstrong Number");
}
