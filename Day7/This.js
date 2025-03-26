// The this keyword in JavaScript refers to the object that is executing the current function. Its value depends on how and where the function is called.
// 1️⃣ this in the Global Context
// When this is used outside of a function, it refers to the global object:

// In browsers, it's window.

// In Node.js, it's global.

console.log(this); // In browser: window, In Node.js: global
function showThis() {
  console.log(this); // window (or global in Node.js)
}
showThis();
//  But in strict mode ("use strict"), this will be undefined:
// "use strict";
// function showThis() {
//   console.log(this); // undefined
// }
// showThis();

// 2️⃣ this in an Object Method
// When this is used inside a method, it refers to the object calling the method.
const user3 = {
  name: "Khushi",
  greet: function () {
    console.log(this.name); // "Khushi"
  },
};
user3.greet();
// 3️⃣ this in a Constructor Function
// When using this inside a constructor function, it refers to the newly created object.

function User(name) {
  this.name = name;
}

const user1 = new User("Khushi");
console.log(user1.name); // "Khushi"
// 4️⃣ this in Classes
// In JavaScript classes, this refers to the current instance of the class.
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const user2 = new User("Khushi");
user.greet(); // "Hello, Khushi"
// ✔ The behavior of this depends on how a function is called.
// ✔ Arrow functions do not have their own this.
// ✔ Use call(), apply(), or bind() to explicitly set this.
