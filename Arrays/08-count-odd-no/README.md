# Count Odd Numbers in an Array

## 📌 Problem Statement

Write a JavaScript function to count the number of **odd elements** in an array.

Return the **total count** of odd numbers.

---

## 📝 Examples

### Example 1

**Input**

```js
[10, 21, 4, 15, 8];
```

**Output**

```text
2
```

**Explanation**

Odd numbers are:

- 21
- 15

Count = **2**

---

### Example 2

**Input**

```js
[2, 4, 6];
```

**Output**

```text
0
```

**Explanation**

There are no odd numbers in the array.

---

### Example 3

**Input**

```js
[-3, -2, -1, 4];
```

**Output**

```text
2
```

**Explanation**

Odd numbers are:

- -3
- -1

Count = **2**

---

### Example 4

**Input**

```js
[];
```

**Output**

```text
0
```

**Explanation**

The array is empty, so the count of odd numbers is **0**.

---

## ✅ Solution

```javascript
function countOdd(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }

  return count;
}

// Test Cases
console.log(countOdd([10, 20, 5, 15])); // 2
console.log(countOdd([-3, -2, -1, 4])); // 2
console.log(countOdd([0, 2, 4])); // 0
console.log(countOdd([])); // 0
```

---

## 💡 Approach

1. Initialize a variable `count` with `0`.
2. Traverse the array using a `for` loop.
3. Check if the current element is odd using:

   ```js
   arr[i] % 2 !== 0;
   ```

4. If the condition is true, increment `count`.
5. Return `count` after the loop finishes.

---

## ⏱️ Complexity Analysis

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## 🧪 Test Cases

| Input                | Output |
| -------------------- | ------ |
| `[10, 20, 5, 15]`    | `2`    |
| `[10, 21, 4, 15, 8]` | `2`    |
| `[2, 4, 6]`          | `0`    |
| `[-3, -2, -1, 4]`    | `2`    |
| `[1, 3, 5, 7]`       | `4`    |
| `[]`                 | `0`    |

---

## 🎯 Concepts Practiced

- Arrays
- `for` loop
- Conditional statements (`if`)
- Modulus operator (`%`)
- Counting pattern
- Time & Space Complexity
