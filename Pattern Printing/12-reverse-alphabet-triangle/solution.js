function reverse_alphabet_triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += String.fromCharCode(64 + j);
    }
    console.log(row);
  }
}
reverse_alphabet_triangle(5);
