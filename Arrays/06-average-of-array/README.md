# ⭐ Array Problem #6 - Average of Array

## 📌 Problem Statement

Given an array of integers, find the **average of all elements** in the array.

If the array is empty, return an appropriate message.

---

## 📝 Example 1

### Input

```javascript
[10, 20, 5, 15];
```

### Output

```text
12.5
```

---

## 📝 Example 2

### Input

```javascript
[5, 10, 15];
```

### Output

```text
10
```

---

## 📝 Example 3

### Input

```javascript
[];
```

### Output

```text
"Array is empty"
```

---

## 💡 Approach

1. Check if the array is empty.
2. Initialize a variable `sum` with `0`.
3. Traverse the array.
4. Add each element to `sum`.
5. Divide `sum` by `arr.length`.
6. Return the average.

---

## 🧠 Algorithm

1. Input the array.
2. If the array is empty, return `"Array is empty"`.
3. Initialize:

```javascript
let sum = 0;
```

4. Traverse the array.
5. Add each element to `sum`.
6. Return:

```javascript
sum / arr.length;
```

---

## 💻 JavaScript Solution

```javascript
function averageOfArray(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(averageOfArray([10, 20, 5, 15]));
```

---

## 🧪 Dry Run

### Input

```text
[10, 20, 5, 15]
```

| Element | Running Sum |
| ------: | ----------: |
|      10 |          10 |
|      20 |          30 |
|       5 |          35 |
|      15 |          50 |

Average = `50 / 4 = 12.5`

### Output

```text
12.5
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

| Input          | Output             |
| -------------- | ------------------ |
| `[10,20,5,15]` | `12.5`             |
| `[5]`          | `5`                |
| `[-5,5]`       | `0`                |
| `[]`           | `"Array is empty"` |

---

## ❌ Common Mistakes

- Forgetting to check for an empty array.
- Dividing before calculating the total sum.
- Using integer division (not an issue in JavaScript).
- Returning inside the loop.

---

## 🎯 Key Takeaways

- Calculate the total sum first.
- Divide by the number of elements.
- Handle empty arrays.
- Solve in **O(n)** time and **O(1)** space.

---

## 📚 Concepts Used

- Arrays
- Array Traversal
- Loops
- Variables
- Arithmetic Operators
- Time & Space Complexity
