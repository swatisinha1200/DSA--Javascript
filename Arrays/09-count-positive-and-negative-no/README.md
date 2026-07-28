# Count Positive and Negative Numbers in an Array

## 📌 Problem Statement

Write a JavaScript function to count the number of **positive** and **negative** elements separately in an array.

Return the total count of:

- Positive numbers
- Negative numbers

Ignore zero because it is neither positive nor negative.

---

# 📝 Examples

## Example 1

### Input

```javascript
[10, 20, -6, 15];
```

### Output

```text
Positive number: 3
Negative number: 1
```

### Explanation

Positive numbers:

```text
10, 20, 15
```

Count = **3**

Negative numbers:

```text
-6
```

Count = **1**

---

## Example 2

### Input

```javascript
[-5, -10, -2];
```

### Output

```text
Positive number: 0
Negative number: 3
```

### Explanation

All numbers are negative.

---

## Example 3

### Input

```javascript
[5, 10, 15];
```

### Output

```text
Positive number: 3
Negative number: 0
```

### Explanation

All numbers are positive.

---

## Example 4

### Input

```javascript
[0, 0, 5, -2];
```

### Output

```text
Positive number: 1
Negative number: 1
```

### Explanation

- `5` is positive
- `-2` is negative
- `0` is ignored

---

# 💡 Approach

To solve this problem:

1. Create two counters:
   - `positive` to store positive numbers count.
   - `negative` to store negative numbers count.

2. Traverse the array using a loop.

3. For every element:
   - If number is greater than `0`, increase positive count.
   - If number is less than `0`, increase negative count.
   - If number is `0`, ignore it.

4. Return both counts.

---

# 🧩 Pattern Used: Multiple Counting Pattern

This problem uses the **multiple counter pattern**.

General structure:

```text
Create multiple counters
          ↓
Loop through array
          ↓
Check different conditions
          ↓
Increase respective counter
          ↓
Return result
```

---

# ✏️ Dry Run

Input:

```javascript
[10, 20, -6, 15];
```

Initial:

```text
positive = 0
negative = 0
```

---

### Element: 10

Condition:

```javascript
10 > 0;
```

True:

```text
positive = 1
```

---

### Element: 20

Condition:

```javascript
20 > 0;
```

True:

```text
positive = 2
```

---

### Element: -6

Condition:

```javascript
-6 < 0;
```

True:

```text
negative = 1
```

---

### Element: 15

Condition:

```javascript
15 > 0;
```

True:

```text
positive = 3
```

---

Final Result:

```text
positive = 3
negative = 1
```

---

# ✅ JavaScript Solution

```javascript
function positiveNegativeNo(arr) {
  let positive = 0;
  let negative = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    }
  }

  return {
    positive,
    negative,
  };
}

console.log(positiveNegativeNo([10, 20, -6, 15]));
```

---

# 🧪 Test Cases

## Test Case 1

```javascript
positiveNegativeNo([10, 20, -6, 15]);
```

Output:

```javascript
{
  positive: 3,
  negative: 1
}
```

---

## Test Case 2

```javascript
positiveNegativeNo([-1, -2, -3]);
```

Output:

```javascript
{
  positive: 0,
  negative: 3
}
```

---

## Test Case 3

```javascript
positiveNegativeNo([5, 8, 12]);
```

Output:

```javascript
{
  positive: 3,
  negative: 0
}
```

---

## Test Case 4

```javascript
positiveNegativeNo([]);
```

Output:

```javascript
{
  positive: 0,
  negative: 0
}
```

---

# ⚙️ Complexity Analysis

## Time Complexity

```text
O(n)
```

### Explanation

The function checks every element once.

For an array with `n` elements:

```text
Loop runs n times
```

---

## Space Complexity

```text
O(1)
```

### Explanation

Only two counter variables are created:

```javascript
positive;
negative;
```

No extra data structure is used.

---

# 🔑 Important Interview Concepts

## 1. Positive Number Check

Condition:

```javascript
number > 0;
```

Examples:

```javascript
5 > 0; // true
10 > 0; // true
```

---

## 2. Negative Number Check

Condition:

```javascript
number < 0;
```

Examples:

```javascript
-5 <
  0 - // true
    10 <
  0; // true
```

---

## 3. Zero Handling

Zero is neither positive nor negative.

Example:

```javascript
0 > 0; // false

0 < 0; // false
```

So it is ignored.

---

# 🎯 Similar Problems Using Same Pattern

Practice these problems:

## 1. Count Positive, Negative, and Zero Numbers

Example:

```javascript
[5, -2, 0, 10, -8];
```

Output:

```text
Positive: 2
Negative: 2
Zero: 1
```

---

## 2. Count Even and Odd Numbers Together

Example:

```javascript
[2, 5, 8, 9];
```

Output:

```text
Even: 2
Odd: 2
```

---

## 3. Count Vowels and Consonants

Example:

```text
"javascript"
```

Output:

```text
Vowels: 3
Consonants: 7
```

---

# ⭐ Key Learning

This problem introduces the **Multiple Counter Pattern**:

```text
Array
  ↓
Check every element
  ↓
Match different conditions
  ↓
Update different counters
  ↓
Return combined result
```

This pattern is frequently used in JavaScript interviews for:

- Counting categories
- Frequency problems
- Data analysis
- Array processing
