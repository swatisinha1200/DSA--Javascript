let a = 12;
let b = 18;
for (let i = Math.max(a, b); ; i++) {
  if (i % a === 0 && i % b === 0) {
    console.log(i);
    break;
  }
}
