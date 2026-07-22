let n = 7;
let first = 0;
let second = 1;
let next;
console.log(first);
console.log(second);
for (let i = 1; i <= n - 2; i++) {
  next = first + second;
  console.log(next);
  first = second;
  second = next;
}
