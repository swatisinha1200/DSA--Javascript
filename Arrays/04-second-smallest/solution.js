function secondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least 2 elements";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  if (secondSmallest === Infinity) {
    return "No second smallest element";
  }

  return secondSmallest;
}
console.log(secondSmallest([10, 20, 5, 15]));
