⭐ Problem Statement
Write a JavaScript program to find the smallest element in an array.
Example
Input
arr = [10, 20, 5, 15]
Output
5
Explanation
The smallest number in the array is 5.

📖 Definition
The smallest element is the minimum value present in an array.
Example:
Array = [8, 3, 15, 2]
Smallest = 2

🧠 Logic 1. Assume the first element is the smallest. 2. Traverse the array from left to right. 3. Compare each element with the current smallest. 4. If a smaller element is found, update the smallest. 5. Return or print the smallest value.

📝 Algorithm 1. Input the array. 2. Initialize:
let smallest = arr[0]; 3. Traverse the array:
for (let i = 0; i < arr.length; i++) 4. Compare:
if (arr[i] < smallest) 5. Update:
smallest = arr[i]; 6. Return or print smallest.

📊 Complexity Analysis
Time Complexity
O(n)
Reason
• The array is traversed only once.
• Each element is compared exactly one time.

Space Complexity
O(1)
Reason
Only one extra variable (smallest) is used.
