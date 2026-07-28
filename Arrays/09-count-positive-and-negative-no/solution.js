function positiveNegativeNo(arr) {
  let positive = 0;
  let negative = 0;
  if (arr.length === 0) {
    return "array is empty";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      console.log("number is zero ");
    }
  }
  return `Positive number: ${positive}, Negative number: ${negative}`;
}
console.log(positiveNegativeNo([10, 20, -6, 15]));
