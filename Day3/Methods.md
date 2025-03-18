1. .map()
Purpose:
Used to transform each element in an array and return a new array of the same length.
Key Points:
Always returns a new array.
Does not modify the original array.
Requires a return statement inside the callback.

2. .filter()
Purpose:
Used to filter elements based on a condition and return a new array with only the matching elements.
Key Points:
Only includes elements that return true in the callback function.
The length of the new array may be smaller than the original.

3. .forEach()
Purpose:
Used to loop through an array and execute a function on each element without returning a new array.
Key Points:
Does not return anything (undefined).
Used for performing actions, like logging or modifying external variables.

✔ Use .map() when you need a new array with modified values.
✔ Use .filter() when you need a new array with some elements removed.
✔ Use .forEach() when you just want to perform an operation (e.g., logging) but don’t need a new