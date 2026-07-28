# ⭐ Array Problem #5 - Sum of Array

## 📌 Problem Statement

Given an array of integers, find the **sum of all elements** in the array.

---

## 📝 Example 1

### Input

```javascript
[10, 20, 5, 15];
```

### Output

```text
50
```

---

## 📝 Example 2

### Input

```javascript
[-5, 10, -3];
```

### Output

```text
2
```

---

## 📝 Example 3

### Input

```javascript
[];
```

### Output

```text
0
```

---

## 💡 Approach

1. Initialize a variable `sum` to `0`.
2. Traverse the array using a loop.
3. Add each element to `sum`.
4. Return the final value of `sum`.

---

## 🧠 Algorithm

1. Input the array.
2. Initialize:

```javascript
let sum = 0;
```

3. Traverse the array.
4. Add each element to `sum`.
5. Return `sum`.

---

## 💻 JavaScript Solution

```javascript
function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumOfArray([10, 20, 5, 15]));
```

---

## 🧪 Dry Run

### Input

```text
[10, 20, 5, 15]
```

| Element | Sum |
| ------: | --: |
|      10 |  10 |
|      20 |  30 |
|       5 |  35 |
|      15 |  50 |

### Output

```text
50
```

---

## ⏱️ Complexity Analysis

### Time Complexity

**O(n)**

- The array is traversed once.

### Space Complexity

**O(1)**

- Only one extra variable is used.

---

## ⚠️ Edge Cases

| Input          | Output |
| -------------- | ------ |
| `[10,20,5,15]` | `50`   |
| `[-5,10,-3]`   | `2`    |
| `[7]`          | `7`    |
| `[]`           | `0`    |

---

## ❌ Common Mistakes

- Forgetting to initialize `sum` with `0`.
- Returning inside the loop.
- Using `arr.length - 1` incorrectly and skipping the last element.
- Forgetting to return the final sum.

---

## 🎯 Key Takeaways

- Initialize `sum` with `0`.
- Traverse the array only once.
- Add every element to `sum`.
- This is an **O(n)** solution with **O(1)** extra space.

---

## 📚 Concepts Used

- Arrays
- Traversal
- Loops
- Variables
- Accumulation
- Time & Space Complexity
