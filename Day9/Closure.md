Lexical scope means that inner functions always have access to outer function variables.
🔍 What is a Closure in JavaScript?
A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

A closure allows a function to access variables from an enclosing scope or environment even after it has left that scope.

💡 Why are Closures Useful?
Closures are used in many real-world scenarios, such as:

Data Privacy (Encapsulation)

Function Factories (Creating multiple functions with different values)

Event Listeners (Remembering variables for later execution)

Memoization (Optimizing expensive function calls)

Callbacks and Promises (Maintaining state in async operations)

🔥 Where Closures and React Props Overlap
Closures can be useful in React hooks, such as useState and useEffect.
```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1); // Closure: `prevCount` remembers previous value
  }

  return <button onClick={increment}>Count: {count}</button>;
}
```

## 🔍 Closures vs React Props (Parent to Child Communication)

| **Feature**      | **Closures** | **Props in React** |
|-----------------|-------------|--------------------|
| **Definition**  | A function remembers variables from its parent scope even after the parent has finished execution. | Parent component passes data (props) to child components. |
| **Scope**       | Works within a function's lexical scope. | Works within React’s component hierarchy. |
| **Data Sharing** | Inner function can access parent’s variables. | Child component receives data via props. |
| **Mutability**  | Variables can be updated if stored inside a closure. | Props are **read-only** in child components. |
| **Usage**       | Used in JavaScript for encapsulation and private state. | Used in React for component communication. |
