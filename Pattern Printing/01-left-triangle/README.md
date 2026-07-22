⭐ Problem Statement
Write a JavaScript program to print a Left Triangle Pattern for a given number n.
Example 1
Input
5
Output

- \*\*
  ***
  ***
  ***
  Explanation
  Each row prints stars equal to the row number.
  • Row 1 → 1 star
  • Row 2 → 2 stars
  • Row 3 → 3 stars
  • Row 4 → 4 stars
  • Row 5 → 5 stars

📖 Definition
A Left Triangle Pattern is a star pattern where:
• The number of rows is equal to n.
• The number of stars increases by 1 in every row.
• No spaces are required.

🧠 Logic 1. Read the value of n. 2. Start the outer loop from 1 to n. 3. Create an empty string row. 4. Run the inner loop from 1 to i. 5. Add one \* in each iteration. 6. Print the completed row.

📝 Algorithm 1. Input the value of n. 2. Loop i from 1 to n. 3. Initialize:
let row = ""; 4. Run another loop from 1 to i. 5. Append "\*" to row.
Print row.

📊 Complexity Analysis
Time Complexity
O(n²)
Reason
The inner loop runs:
1 + 2 + 3 + ... + n
which is approximately n²/2.

Space Complexity
O(n)
Reason
The row string stores at most n characters before printing.
