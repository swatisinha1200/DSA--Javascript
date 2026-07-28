# Count Even Numbers in an Array

## 📌 Problem Statement

Write a JavaScript function to **count the number of even elements** present in an array.

Return the **total count of even numbers**.

---

## 📝 Examples

### Example 1

**Input**

```javascript
[10, 21, 4, 15, 8];
```

**Output**

```text
3
```

**Explanation**

Even numbers are:

```text
10, 4, 8
```

Count = **3**

---

### Example 2

**Input**

```javascript
[1, 3, 5];
```

**Output**

```text
0
```

**Explanation**

There are no even numbers in the array.

---

### Example 3

**Input**

```javascript
[-3, -2, -6, 5];
```

**Output**

```text
2
```

**Explanation**

Even numbers are:

```text
-2, -6
```

Count = **2**

---

### Example 4

**Input**

```javascript
[];
```

**Output**

```text
0
```

**Explanation**

An empty array contains no even numbers.

---

# 💡 Approach

To solve this problem:

1. Create a variable `count` and initialize it with `0`.
2. Traverse through each element of the array.
3. Check whether the current element is even.
4. If the number is even, increase the count.
5. Return the final count.

---

# 🔍 How to Check Even Numbers?

A number is even if it is completely divisible by `2`.

We use the modulus (`%`) operator.

### Example

```javascript
10 % 2;
```

Output:

```text
0
```

Since the remainder is `0`, `10` is even.

---

### Odd Number Example

```javascript
7 % 2;
```

Output:

```text
1
```

Since the remainder is not `0`, `7` is odd.

---

# 🧩 Pattern Used: Counting Pattern

This problem follows the common array counting pattern:

```text
Step 1: Create counter variable

Step 2: Loop through the array

Step 3: Check condition

Step 4: Increase counter if condition is true

Step 5: Return counter
```

Template:

```javascript
let count = 0;

for (loop through array) {

    if (condition) {
        count++;
    }

}

return count;
```

---

# ✅ JavaScript Solution

```javascript
function countEven(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

// Test Cases
console.log(countEven([10, 20, -6, 15])); // 3
console.log(countEven([1, 3, 5])); // 0
console.log(countEven([])); // 0
```

---

# 🧪 Test Cases

| Input                | Output |
| -------------------- | ------ |
| `[10, 21, 4, 15, 8]` | `3`    |
| `[1, 3, 5]`          | `0`    |
| `[-3, -2, -6, 5]`    | `2`    |
| `[2, 4, 6, 8]`       | `4`    |
| `[]`                 | `0`    |

---

# ⏱️ Complexity Analysis

## Time Complexity

```text
O(n)
```

### Explanation

We visit every element in the array once.

For an array of size `n`, the loop runs `n` times.

---

## Space Complexity

```text
O(1)
```

### Explanation

We only use one extra variable:

```javascript
count;
```

No additional data structure is created.

---

# 🔑 Important Interview Concepts

## 1. Modulus Operator (`%`)

Used to find the remainder after division.

Examples:

```javascript
8 % 2 = 0   // Even

9 % 2 = 1   // Odd
```

---

## 2. Negative Even Numbers

The condition:

```javascript
number % 2 === 0;
```

works for negative even numbers too.

Examples:

```javascript
(-4 % 2 ===
  0 - // true
    (6 % 2)) ===
  0; // true
```

---

## 3. Counting Pattern

Remember this approach:

```text
Array
  ↓
Loop through elements
  ↓
Check condition
  ↓
Increase count
  ↓
Return result
```

This pattern is used in many interview problems:

- Count odd numbers
- Count even numbers
- Count positive numbers
- Count negative numbers
- Count numbers greater than a value

---
