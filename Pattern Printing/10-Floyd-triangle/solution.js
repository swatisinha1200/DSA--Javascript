function floydTriangle(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
floydTriangle(5);
