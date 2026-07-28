function countOdd(arr) {
  let count = 0;
  if (arr.length === 0) {
    return count;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }

  return count;
}
console.log(countOdd([10, 20, 5, 15]));
console.log(countOdd([-3, -2, -1, 4]));
console.log(countOdd([0, 2, 4]));
console.log(countOdd([]));
