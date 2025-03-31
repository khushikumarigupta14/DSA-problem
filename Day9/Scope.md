1. Global Scope 🌍
A variable is in the global scope when it's declared outside of any function or block. It can be accessed from anywhere in the script.
Variables declared with var, let, or const at the top level (outside functions and blocks) are global.

They can be accessed and modified from anywhere in the script.

2. Block Scope {} 🔒
A variable is in the block scope when it's declared inside {} (curly braces), like in loops, if statements, or functions.
Variables declared with let and const inside a {} are only accessible inside that block.
```javascript
if (true) {
    var a = 10;  // ✅ Escapes block (not block-scoped)
    let b = 20;  // ❌ Block-scoped (only inside {})
    const c = 30; // ❌ Block-scoped (only inside {})
}

console.log(a); // ✅ Works (bad practice)
console.log(b); // ❌ Error! b is not defined
console.log(c); // ❌ Error! c is not defined
```

 Function Scope
var is function-scoped, meaning it's only accessible within the function.
var doesn't have block scope, but it does have function scope.
```javascript
function testScope() {
    var x = "Inside function";
    console.log(x); // Works here
}
testScope();

console.log(x); // ❌ Error! x is not defined

```