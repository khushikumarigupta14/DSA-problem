// Static methods belong to the class itself, not instances. They cannot access this (instance properties).

class MathOperations {
  // Static Method
  static add(a, b) {
    return a + b;
  }
}

console.log(MathOperations.add(5, 3)); // Output: 8

const mathObj = new MathOperations();
// mathObj.add(5,3); // ❌ Error! Static methods are called on the class, not instances.
// Static methods are useful for utility functions that do not depend on the state of the object.