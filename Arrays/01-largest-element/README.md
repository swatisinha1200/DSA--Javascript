⭐ Problem Statement
Write a JavaScript program to find the largest element in an array.
Example
Input
arr = [2, 7, 1, 9, 5]
Output
9
Explanation
The largest number in the array is 9.

📖 Definition
The largest element is the maximum value present in an array.
Example:
Array = [4, 10, 3, 8]
Largest = 10

🧠 Logic 1. Take the first element as the largest. 2. Traverse the array using a loop. 3. Compare each element with the current largest. 4. If the current element is greater, update the largest. 5. After the loop ends, return or print the largest value.

📝 Algorithm 1. Input the array. 2. Initialize:
let largest = arr[0]; 3. Traverse the array:
for (let i = 0; i < arr.length; i++) 4. Compare:
if (arr[i] > largest) 5. Update:
largest = arr[i]; 6. Print or return largest.
Complexity Analysis
Time Complexity
O(n)
Reason
• The array is traversed only once.
• Each element is compared exactly one time.

Space Complexity
O(1)
Reason
Only one extra variable (largest) is used.
