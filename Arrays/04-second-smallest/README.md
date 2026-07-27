# ⭐ Array Problem #4 - Find Second Smallest Element

## 📌 Problem Statement

Given an array of integers, find the **second smallest distinct element** in the array.

If no second smallest element exists, return an appropriate message.

---

## 📝 Example 1

### Input

```javascript
[10, 20, 5, 15];
```

### Output

```text
10
```

---

## 📝 Example 2

### Input

```javascript
[10, 5, 5, 20];
```

### Output

```text
10
```

> Duplicate smallest values are ignored.

---

## 📝 Example 3

### Input

```javascript
[5, 5, 5];
```

### Output

```text
"No second smallest element"
```

---

## 📝 Example 4

### Input

```javascript
[5];
```

### Output

```text
"Array must contain at least 2 elements"
```

---

## 💡 Approach

1. Check if the array contains at least two elements.
2. Initialize:
   - `smallest = Infinity`
   - `secondSmallest = Infinity`
3. Traverse the array once.
4. If the current element is smaller than `smallest`:
   - Update `secondSmallest` with the old `smallest`.
   - Update `smallest`.
5. Otherwise, if the current element is:
   - greater than `smallest`
   - smaller than `secondSmallest`
   - update `secondSmallest`.
6. After traversal:
   - If `secondSmallest` is still `Infinity`, no second smallest element exists.
   - Otherwise, return `secondSmallest`.

---

## 🧠 Algorithm

1. Check if the array size is less than 2.
2. Initialize:
   ```javascript
   let smallest = Infinity;
   let secondSmallest = Infinity;
   ```
3. Traverse the array.
4. Update `smallest` and `secondSmallest` whenever required.
5. Return the answer.

---

## 💻 JavaScript Solution

```javascript
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
```

---

## 🧪 Dry Run

### Input

```text
[10, 20, 5, 15]
```

| Element | Smallest | Second Smallest |
| ------: | -------: | --------------: |
|      10 |       10 |        Infinity |
|      20 |       10 |              20 |
|       5 |        5 |              10 |
|      15 |        5 |              10 |

### Output

```text
10
```

---

## ⏱️ Complexity Analysis

### Time Complexity

**O(n)**

- The array is traversed only once.

### Space Complexity

**O(1)**

- Only two extra variables are used.

---

## ⚠️ Edge Cases

| Input             | Output                                     |
| ----------------- | ------------------------------------------ |
| `[10, 20, 5, 15]` | `10`                                       |
| `[10, 5, 5, 20]`  | `10`                                       |
| `[5, 5, 5]`       | `"No second smallest element"`             |
| `[5]`             | `"Array must contain at least 2 elements"` |
| `[]`              | `"Array must contain at least 2 elements"` |

---

## ❌ Common Mistakes

### 1. Using `-Infinity` instead of `Infinity`

```javascript
let smallest = -Infinity;
```

❌ This prevents `smallest` from updating correctly.

✅ Correct:

```javascript
let smallest = Infinity;
```

---

### 2. Updating variables in the wrong order

❌ Wrong

```javascript
smallest = arr[i];
secondSmallest = smallest;
```

✅ Correct

```javascript
secondSmallest = smallest;
smallest = arr[i];
```

---

### 3. Wrong comparison

❌ Wrong

```javascript
arr[i] < smallest && arr[i] < secondSmallest;
```

✅ Correct

```javascript
arr[i] > smallest && arr[i] < secondSmallest;
```

---

### 4. Forgetting to handle duplicate values

The second smallest must be **distinct** from the smallest.

---

### 5. Forgetting to check array length

Always verify the array contains at least two elements before processing.

---

## 🎯 Key Takeaways

- Use **two variables** (`smallest` and `secondSmallest`).
- Initialize both with `Infinity`.
- Update `secondSmallest` before updating `smallest`.
- Ignore duplicate smallest values.
- Handle edge cases such as empty arrays and arrays with identical elements.
- Solve the problem in **O(n)** time and **O(1)** space.

---

## 📚 Concepts Used

- Arrays
- Array Traversal
- Conditional Statements
- Variables
- Comparison Operators
- Time & Space Complexity

---

## 🏆 Summary

| Property         | Value            |
| ---------------- | ---------------- |
| Difficulty       | ⭐ Easy          |
| Topic            | Arrays           |
| Time Complexity  | O(n)             |
| Space Complexity | O(1)             |
| Approach         | Single Traversal |
| Status           | ✅ Solved        |
