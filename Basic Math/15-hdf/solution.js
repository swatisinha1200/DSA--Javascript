let a = 12;
let b = 18;
for (let i = a; i >= 1; i--) {
  if (a % i === 0 && b % i === 0) {
    console.log(i);
    break;
  }
}
