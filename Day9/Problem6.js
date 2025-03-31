const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is Alice ✅
// In JavaScript, when a function is created inside an object, it is called a method.

// If a function is inside an object → it's a method

// If a function is outside an object → it's a regular function
person.greet(); // ✅ Using dot notation
person["greet"](); // ✅ Using bracket notation
const user = {
  name: "Bob",
  sayHello: function () {
    console.log(this.name); // ✅ Works correctly (this = user)
  },
  sayBye: () => {
    console.log(this.name); // ❌ Undefined (this = global)
  },
};

user.sayHello(); // Output: Bob ✅
user.sayBye(); // Output: undefined ❌
