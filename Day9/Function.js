function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Output: Hello, Alice
// Lexical scope
function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
    console.log(outerVar); // ✅ Inner function can access outer function's variables
  }

  innerFunction();
}

outerFunction(); // Output: "I'm outside!"
