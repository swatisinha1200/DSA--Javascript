function averageOfArray(arr) {
  let sum = 0;
  let average;
  if (arr.length === 0) {
    return "Array is empty";
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
}
console.log(averageOfArray([10, 20, 5, 15]));
