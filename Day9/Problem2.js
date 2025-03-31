// Hoisting : moving variable and function declarations to the top of their scope before code execution.
// Hoisting is JavaScript's behavior of moving function and variable declarations to the top of their scope before execution. It happens in both the browser (Chrome DevTools) and Node.js (VS Code Debugger), but debugging methods differ slightly.
// How Hoisting Works
// Variable declarations (var, let, const) are hoisted, but only var is initialized with undefined. let and const are hoisted but remain uninitialized (they are in the "temporal dead zone").

// Function declarations are hoisted along with their definitions.

// Function expressions are hoisted but not initialized.
// memory phase
// coding phase
console.log("here my age is", age);
var age = 2;
console.log(age);
// debugger
// dev tools

// functionName();
name = 888;
console.log(name);
// Function Declarations are Fully Hoisted
// Function Expressions are NOT Hoisted

