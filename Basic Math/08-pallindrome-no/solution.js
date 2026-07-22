let n = 121,
  reverse = 0;
let i = n;
while (i > 0) {
  let digit = i % 10;
  reverse = reverse * 10 + digit;
  i = Math.floor(i / 10);
}
if (n === reverse) {
  console.log("Palindrome" + n);
} else {
  console.log("Not a Pallindrome" + n);
}
