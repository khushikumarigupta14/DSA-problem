# JavaScript Set: A Complete Guide

## What is a Set in JavaScript?

A Set is a built-in JavaScript object that allows you to store unique values. Unlike arrays, sets do not allow duplicate elements.

### Example: Creating a Set

```javascript
const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Output: Set { 1, 2, 3, 4 }
```

Here, the duplicate `3` is automatically removed.

---

## Set Methods

| Method         | Description                                       |
|---------------|---------------------------------------------------|
| `add(value)`   | Adds a new value to the Set                      |
| `delete(value)`| Removes a value from the Set                     |
| `has(value)`   | Checks if a value exists in the Set (true/false) |
| `size`        | Returns the number of elements in the Set        |
| `clear()`     | Removes all elements from the Set               |
| `forEach()`   | Iterates over each element in the Set            |
| `values()`    | Returns an iterator for the values in the Set    |

### Example: Using Set Methods

```javascript
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);

console.log(mySet.has(20)); // true
mySet.delete(10);
console.log(mySet.size); // 2

mySet.forEach(value => console.log(value)); // 20, 30
```

---

## Set vs. Array: Key Differences

| Feature    | Set                    | Array                  |
|------------|------------------------|------------------------|
| Duplicates | ❌ No duplicates allowed | ✅ Allows duplicates    |
| Order      | ❌ No guaranteed order   | ✅ Ordered elements     |
| Indexing   | ❌ No indexing (must iterate) | ✅ Indexed elements   |
| Performance | ✅ Faster `has()` lookup (O(1)) | ❌ Slower lookup (O(n)) |

### Example: Removing Duplicates from an Array using Set

```javascript
const arr = [1, 2, 2, 3, 4];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4]
```

---

## Conversion Between Set and Array

### 1️⃣ Convert Set to Array

#### Using Spread Operator `...`

```javascript
const mySet = new Set([10, 20, 30]);
const myArray = [...mySet];
console.log(myArray); // [10, 20, 30]
```

#### Using `Array.from()`

```javascript
const myArray2 = Array.from(mySet);
console.log(myArray2); // [10, 20, 30]
```

### 2️⃣ Convert Array to Set

```javascript
const arr = [1, 2, 2, 3, 4];
const mySet = new Set(arr);
console.log(mySet); // Set { 1, 2, 3, 4 }
```

---

## Convert Between Set and Object

### Convert Set to Object

```javascript
const mySet = new Set(["a", "b", "c"]);
const obj = Object.fromEntries([...mySet].map(value => [value, true]));
console.log(obj); // { a: true, b: true, c: true }
```

### Convert Object to Set

```javascript
const obj = { a: 1, b: 2, c: 3 };
const mySet = new Set(Object.keys(obj));
console.log(mySet); // Set { 'a', 'b', 'c' }
```

---

## Summary

✔ Use `Set` when you need **unique values**.
✔ Use `Array` when you need **indexing & ordering**.
✔ Convert between them using `Array.from()`, `[...Set]`, and `new Set(array)`.
✔ Use `Set` for **fast lookups** and **eliminating duplicates**! 🚀
