# ⭐ Array Problem #3 - Find Second Largest Element

## 📌 Problem Statement

Given an array of integers, find the **second largest distinct element** in the array.

If no second largest element exists, return an appropriate message.

---

## 📝 Example 1

### Input

```javascript
[10, 20, 5, 15]
```

### Output

```text
15
```

---

## 📝 Example 2

### Input

```javascript
[10, 20, 20, 15]
```

### Output

```text
15
```

> Duplicate largest values are ignored.

---

## 📝 Example 3

### Input

```javascript
[20, 20, 20]
```

### Output

```text
"No second largest element"
```

---

## 📝 Example 4

### Input

```javascript
[5]
```

### Output

```text
"Array must contain at least 2 elements"
```

---

## 💡 Approach

1. Initialize two variables:
   - `largest = -Infinity`
   - `secondLargest = -Infinity`
2. Traverse the array once.
3. If the current element is greater than `largest`:
   - Update `secondLargest` with the old `largest`.
   - Update `largest`.
4. Otherwise, if the current element is:
   - greater than `secondLargest`
   - and smaller than `largest`
   - update `secondLargest`.
5. After the loop:
   - If `secondLargest` is still `-Infinity`, no second largest element exists.
   - Otherwise, return `secondLargest`.

---

## 🧠 Algorithm

1. Check if the array contains at least two elements.
2. Initialize:
   ```javascript
   largest = -Infinity;
   secondLargest = -Infinity;
   ```
3. Traverse the array.
4. Update `largest` and `secondLargest` accordingly.
5. Return the answer.

---

## 💻 JavaScript Solution

```javascript
function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least 2 elements";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return "No second largest element";
  }

  return secondLargest;
}

console.log(secondLargest([10, 20, 5, 15]));
```

---

## 🧪 Dry Run

### Input

```text
[10, 20, 5, 15]
```

| Element | Largest | Second Largest |
|---------:|--------:|---------------:|
| 10 | 10 | -Infinity |
| 20 | 20 | 10 |
| 5 | 20 | 10 |
| 15 | 20 | 15 |

### Output

```text
15
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

| Input | Output |
|-------|--------|
| `[10,20,5,15]` | `15` |
| `[10,20,20,15]` | `15` |
| `[20,20,20]` | `"No second largest element"` |
| `[5]` | `"Array must contain at least 2 elements"` |
| `[]` | `"Array must contain at least 2 elements"` |

---

## ❌ Common Mistakes

- Initializing `largest` and `secondLargest` incorrectly.
- Updating `largest` before saving it into `secondLargest`.
- Returning from inside the loop.
- Forgetting to ignore duplicate largest values.
- Not handling arrays with fewer than two elements.

---

## 🎯 Key Takeaways

- Use **two variables** to track the largest and second largest values.
- Always update `secondLargest` before updating `largest`.
- Ignore duplicate largest values.
- Handle edge cases such as empty arrays, single-element arrays, and arrays with all identical elements.
- Solve the problem in **O(n)** time and **O(1)** space.

---

## 📚 Concepts Used

- Arrays
- Traversal
- Conditional Statements
- Variables
- Comparison Operators
- Time & Space Complexity