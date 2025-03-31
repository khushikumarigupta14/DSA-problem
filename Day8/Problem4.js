// why Nan not a nuber is treated as actual number
console.log(typeof NaN); // "number"
// JavaScript uses IEEE 754 (floating-point standard) for numbers.

// In IEEE 754, NaN is a special type of numeric value that represents an undefined or unrepresentable number.

// Since NaN is still a part of the numeric system (even though it's invalid), typeof NaN returns "number".
console.log(0 / 0); // NaN (Indeterminate form)
console.log(Math.sqrt(-1)); // NaN (Square root of a negative number)
console.log(parseInt("hello")); // NaN (Cannot convert "hello" to a number)
// Why Is NaN Not Equal to Itself?
// Another weird property of NaN is that it is not equal to itself:
console.log(NaN === NaN); // false
// In IEEE 754, NaN represents an unknown or invalid number.

// Since NaN means "not a number", comparing two NaN values doesn’t make sense—one NaN could be different from another NaN.
