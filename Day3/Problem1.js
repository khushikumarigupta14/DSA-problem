//  Calculate the Sum and Average of an Array
// & Logic behind the question use
// array --> multiple value(any datatype) single variable
// filter only number data type in array elements
// Filtering Only Numbers

// The goal is to extract only the numeric values from the array.
// We use .filter() with typeof item === "number" to remove non-number elements.
// Performing Operations

// Sum → Use .reduce() to calculate the total sum.
// Average → Divide the sum by the total count of numbers.
const arr = [1, 2, 3, 65, 7, "khushi", true, null, 12, "123"];
// ✅ Correctly filter only numbers
const arrFiltered = arr.filter((item) => typeof item === "number");
console.log("Filtered Array:", arrFiltered); // Output: [1, 2, 3, 65, 7]

// ✅ Correct sum calculation using `.reduce()`
const arrSum = arrFiltered.reduce((sum, item) => sum + item, 0);
console.log("Sum:", arrSum); // Output: 78

// ✅ Correct average calculation
const arrAvg = arrFiltered.length > 0 ? arrSum / arrFiltered.length : 0;
console.log("Average:", arrAvg); // Output: 15.6
