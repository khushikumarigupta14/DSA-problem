# JavaScript Array Methods  

## 1️⃣ .map()  
**Purpose:**  
Used to transform each element in an array and return a new array of the same length.  

**Key Points:**  
- Always returns a new array.  
- Does not modify the original array.  
- Requires a return statement inside the callback.  

## 2️⃣ .filter()  
**Purpose:**  
Used to filter elements based on a condition and return a new array with only the matching elements.  

**Key Points:**  
- Only includes elements that return `true` in the callback function.  
- The length of the new array may be smaller than the original.  

## 3️⃣ .forEach()  
**Purpose:**  
Used to loop through an array and execute a function on each element without returning a new array.  

**Key Points:**  
- Does not return anything (`undefined`).  
- Used for performing actions like logging or modifying external variables.  

### ✔ Usage Recommendations:  
- Use `.map()` when you need a **new array** with modified values.  
- Use `.filter()` when you need a **new array** with some elements removed.  
- Use `.forEach()` when you just want to perform an **operation** (e.g., logging) but don’t need a new array.  

---

## 4️⃣ What is `reduce()` in JavaScript?  
**Definition:**  
The `reduce()` method iterates over an array and reduces it to a single value (sum, product, object, etc.).  

**Syntax:**  
```javascript
array.reduce((accumulator, currentValue) => { ... }, initialValue);
```










1️⃣ What is reduce() in JavaScript?
Definition:
The reduce() method is used to iterate over an array and reduce it to a single value (sum, product, object, etc.).

Syntax:
```array.reduce((accumulator, currentValue) => { ... }, initialValue);```
`accumulator → Stores the accumulated result.
currentValue → The current item in the iteration.
initialValue → (Optional) The starting value of the accumulator.`
2️⃣ What is sort() in JavaScript?
Definition:
The sort() method sorts an array in place (modifies the original array).

Syntax:
```array.sort((a, b) => { ... });```
`Returns a sorted array.
Default behavior: Converts elements to strings and sorts them lexicographically.`

| Method   | Purpose                                         | Example Use                          |
|----------|---------------------------------|---------------------------------|
| `reduce()` | Reduces an array to a single value (sum, frequency, etc.) | Calculate total, count occurrences |
| `sort()`   | Sorts an array in ascending or descending order | Sort numbers, strings, or objects  |

