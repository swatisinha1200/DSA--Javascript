function inverted_hollow_right_triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      if (j == 1 || j == n - i + 1 || i == 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
inverted_hollow_right_triangle(5);
