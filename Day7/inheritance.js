// Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (child class) to inherit properties and methods from another class (parent class). This promotes code reusability and modularity.
// implement `extends` keyword
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`I am ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, subject) {
    super(username); // Using super to Call Parent Class Methods
    this.subject = subject;
  }
  logMe() {
    console.log(`I am ${this.username} and I teach ${this.subject}`);
  } //Overriding Methods in Child Class
  addCourse() {
    console.log("Course added", `${this.subject} and ${this.username}`);
  }
}
const user = new User("chai");
const teacher = new Teacher("tea", "maths");
user.logMe();
teacher.logMe();
teacher.addCourse();
// ✔ Inheritance → Allows one class to inherit properties and methods from another.
// ✔ extends → Used to create a subclass.
// ✔ super() → Calls the parent class constructor.
// ✔ Method Overriding → A subclass can redefine a parent method.
// ✔ Static Methods → Can also be inherited.
// ✔ Private Methods (#method) → Not inherited.
class Parent {
  #secret() {
    console.log("This is a private method.");
  }

  publicMethod() {
    console.log("This is a public method.");
    this.#secret(); // ✅ Can be called inside the same class
  }
}

class Child extends Parent {}

const child = new Child();
child.publicMethod(); // ✅ Output: This is a public method. This is a private method.
// child.#secret(); // ❌ Error! Private methods are not inherited.
// ✔ Private Methods → Not inherited by child classes.
console.log(Teacher instanceof User); // false
console.log(teacher instanceof User); // true
// ✔ instanceof → Checks if an object is an instance of a class.