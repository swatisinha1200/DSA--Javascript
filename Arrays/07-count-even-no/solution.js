function countEven(arr) {
  let count = 0;
  if (arr.length === 0) {
    return count;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
console.log(countEven([10, 20, -6, 15]));
