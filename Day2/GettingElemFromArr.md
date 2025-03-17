## 1️⃣ Iteration Methods (Loop Through Elements)

| Method         | Description                                         | Use Case |
|-------------- |--------------------------------------------------- |--------------------------------------------------|
| **`forEach()`**  | Iterates over each element without returning a new array.  | When you just need to perform an action on each element. |
| **`map()`**     | Iterates over each element and returns a new array. | When you need to modify elements and return a new array. |
| **`for...of`**  | Iterates directly over array values.              | When you want an easy loop over array values. |
| **`for` loop**  | Traditional loop to access elements by index.     | When you need more control over iteration (like skipping elements). |
| **`while` loop** | Loops through elements until a condition is false. | When you don’t know how many iterations are needed. |
| **`do...while` loop** | Executes at least once before checking condition. | When at least one iteration is required. |


## 2️⃣ Extracting All Elements

| Method                 | Description                                      | Use Case |
|----------------------- |------------------------------------------------ |-------------------------------------|
| **`toString()`**       | Converts array into a string.                   | When you need a string representation. |
| **`join()`**           | Converts array into a string with a custom separator. | When formatting array output. |
| **`console.log(...arr)`** | Uses spread operator to log elements.           | When logging elements to console. |
| **`JSON.stringify()`** | Converts array into a JSON string.               | When sending arrays as JSON data. |

---

## 3️⃣ Advanced Iteration Methods

| Method          | Description                                   | Use Case |
|--------------- |--------------------------------------------- |-------------------------------------|
| **`entries()`**  | Returns key-value pairs of the array.       | When you need both indexes and values. |
| **`keys()`**     | Returns indexes of the array.              | When you need just the indexes. |
| **`values()`**   | Returns values of the array.               | When you need only values (ES2019+). |
| **`reduce()`**   | Iterates and accumulates values.           | When you need to process all elements into a single result. |
| **`filter()`**   | Returns only elements that match a condition. | When selecting specific elements. |
| **`every()`**    | Checks if all elements satisfy a condition. | When verifying all elements follow a rule. |
| **`some()`**     | Checks if at least one element satisfies a condition. | When looking for any match in an array. |

---

## 4️⃣ Handling Nested Arrays

| Method       | Description                           | Use Case |
|------------ |------------------------------------- |-------------------------------------|
| **`flat()`**     | Flattens a nested array by one level. | When dealing with arrays inside arrays. |
| **`flatMap()`**  | Maps and flattens the array in one step. | When transforming and flattening together. |

---

## 5️⃣ Converting Array-Like Objects

| Method          | Description                                      | Use Case |
|--------------- |---------------------------------------------- |-------------------------------------|
| **`Object.values()`** | Extracts values from an array-like object.  | When working with objects instead of arrays. |
| **`Array.from()`**    | Converts array-like objects into arrays.   | When converting `NodeList`, `arguments`, etc. |

---

## 6️⃣ Copying and Spreading Elements

| Method        | Description                                | Use Case |
|------------- |---------------------------------------- |-------------------------------------|
| **`Set([...arr])`** | Removes duplicates while keeping all elements. | When retrieving unique elements. |
| **`slice()`**    | Creates a shallow copy of the array.   | When making a copy without modifying the original. |
| **`concat()`**   | Merges arrays and returns a new array. | When combining multiple arrays. |
| **`[...arr] (spread)`** | Copies elements into a new array. | When making a shallow copy of an array. |

