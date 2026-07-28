function sumOfArray(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArray([10, 20, 5, 15]));
