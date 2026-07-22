function invertedPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * (n - i) + 1; k++) {
      if (k == 1 || k == 2 * (n - i) + 1 || i == 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

invertedPyramid(5);
