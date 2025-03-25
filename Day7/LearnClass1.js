// class
// template for creating objects.
// special functions -> expression and declaration
class Person {
  constructor(name, age, isAdmin) {
    //constructor
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
// Creating an instance of the class
const person1 = new Person("Khushi", 21); //instance
person1.greet();
// ^ Singleton pattern
// Class Constructors
// The constructor is a special method that initializes new objects. It is automatically called when creating an instance of a class.
// Methods are defined on the prototype of each class instance and are shared by all instances.