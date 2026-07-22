let n = 6;
let sum = 0;
for (let i = 1; i <= n - 1; i++) {
  if (n % i == 0) {
    sum = sum + i;
  }
}
if (sum === n) {
  console.log("prefect no");
} else {
  console.log("not a perfect no");
}
