⭐ Problem Statement
Write a program to print a right-aligned right triangle using _ (asterisks).
Example (n = 5)
_
\*\*

---

---

---

📖 Definition
A right triangle pattern is a pattern where:
• The number of stars increases by 1 in each row.
• The stars are right-aligned.
• Spaces are printed before the stars to maintain the alignment.
Formula:
• Spaces = n - i
• Stars = i
Where:
• n = total number of rows
• i = current row number

🧠 Logic
Each row has two parts:
Part 1 → Print Spaces
Before printing stars, print spaces.
Row 1 → 4 spaces
Row 2 → 3 spaces
Row 3 → 2 spaces
Row 4 → 1 space
Row 5 → 0 spaces

Formula
Spaces = n - i

Part 2 → Print Stars
After spaces, print stars.
Row 1 → \*
Row 2 → **
Row 3 → \***
Row 4 → \***\*
Row 5 → \*\*\***

Formula
Stars = i

Each row is built as:
Spaces + Stars

📝 Algorithm 1. Read the value of n. 2. Loop from i = 1 to n. 3. Create an empty string row. 4. Print (n - i) spaces. 5. Print i stars. 6. Print the completed row. 7. Repeat until all rows are printed.

📊 Complexity Analysis
Time Complexity
Outer loop runs n times.
Inner loops:
• Spaces → n-i
• Stars → i
Total work:
(n-1)+1
(n-2)+2
(n-3)+3
...
0+n
Each row performs n operations.
Therefore,
Time Complexity:
O(n²)

Space Complexity
Only one string variable (row) is used.
Extra space:
O(n)
(The row string stores up to n characters.)
