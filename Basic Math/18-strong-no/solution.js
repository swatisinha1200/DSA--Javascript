let n = 145;
let temp = n;
let sum = 0;
while (temp > 0) {
  let digit = temp % 10;
  let factorial = 1;
  for (let i = digit; i >= 1; i--) {
    factorial = factorial * i;
  }
  sum = sum + factorial;
  temp = Math.floor(temp / 10);
}
if (sum === n) {
  console.log("strong no");
} else {
  console.log("not strong no");
}
