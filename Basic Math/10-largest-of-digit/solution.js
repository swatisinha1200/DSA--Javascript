let n = 123765;
let largest = 0;
while (n > 0) {
  let digit = n % 10;
  n = Math.floor(n / 10);
  if (digit > largest) {
    largest = digit;
  }
}
console.log(largest);
