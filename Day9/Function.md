1. Regular Functions in JavaScript
A regular function is a function defined using the function keyword. These functions have their own this binding and their own arguments object.

2. Understanding Lexical Scope
What is Lexical Scope?
Lexical scope means that inner functions always have access to outer function variables.
Lexical Scope means that the scope of a variable is determined by its position in the source code, and nested functions have access to variables declared in their outer functions.

🔹 Think of scope like a family tree:

A child (inner function) can access its parent's (outer function's) properties,

But a parent cannot access a child’s properties.