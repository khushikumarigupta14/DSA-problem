// ^ types of methods
// instance methods
// Instance methods belong to the class instance and can access instance properties and other methods using this.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Khushi", 21);
person1.greet(); // Output: Hello, my name is Khushi and I am 21 years old.
