# Algorithm Complexity in JavaScript (DSA) 🚀
 how efficiently an algorithm performs in terms of time (speed) and space (memory usage) as the input size n increases.
## 📌 Types of Complexity
- Time Complexity ⏳ → Measures how execution time grows with input size.
- Space Complexity 💾 → Measures how much memory the algorithm needs.
### 🔹 Time Complexity (Big-O Notation)
Big-O notation describes how an algorithm’s runtime grows with input size.



| Complexity    | Notation  | Description | JavaScript Example |
|--------------|----------|-------------|--------------------|
| **Constant Time**  | O(1) | Takes the same amount of time regardless of input size. ✅ Fastest Complexity | ```js function getFirstElement(arr) { return arr[0]; } ``` |
| **Linear Time**  | O(n) | Time grows directly with input size. ✅ Used when looping through an array. | ```js function printAll(arr) { for (let i = 0; i < arr.length; i++) { console.log(arr[i]); } } ``` |
| **Logarithmic Time** | O(log n) | Divides input in half at each step. ✅ Efficient for large data (e.g., Binary Search). | ```js function binarySearch(arr, target) { let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; } ``` |
| **Quadratic Time** | O(n²) | Nested loops increase time complexity. ❌ Slow for large inputs. | ```js function printPairs(arr) { for (let i = 0; i < arr.length; i++) { for (let j = 0; j < arr.length; j++) { console.log(arr[i], arr[j]); } } } ``` |
| **Linearithmic Time** | O(n log n) | Used in efficient sorting algorithms. Example: Merge Sort, Quick Sort. | ```js function mergeSort(arr) { if (arr.length <= 1) return arr; let mid = Math.floor(arr.length / 2); let left = mergeSort(arr.slice(0, mid)); let right = mergeSort(arr.slice(mid)); return merge(left, right); } ``` |
| **Exponential Time** | O(2ⁿ) | Used in recursive problems like Fibonacci. ❌ Very Slow. | ```js function fibonacci(n) { if (n <= 1) return n; return fibonacci(n - 1) + fibonacci(n - 2); } ``` |
| **Factorial Time** | O(n!) | Used in brute-force algorithms. Example: Traveling Salesman Problem. ❌ Worst Case. | ```js function permute(arr, result = []) { if (!arr.length) console.log(result); for (let i = 0; i < arr.length; i++) { permute([...arr.slice(0, i), ...arr.slice(i + 1)], [...result, arr[i]]); } } ``` |




### 🔹 Space Complexity
Space complexity measures how much extra memory an algorithm needs.

| Algorithm                  | Space Complexity |
|----------------------------|-----------------|
| Looping (no extra memory)  | O(1)           |
| Storing values in an array | O(n)           |
| Recursion (call stack)     | O(n)           |
