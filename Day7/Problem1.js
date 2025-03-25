// What are the possible ways to create objects in JavaScript
// Answer:
// 1. Object literals
// 2. Constructor functions
// 3. Object.create() method
// 4. ES6 Classes
// 5. Singleton pattern
// 6. Factory pattern
// 7. Prototype pattern
// first way
//^  object literal syntax
const object = {
  name: "John", //property with key and value pairs
  age: 25,
  isAdmin: false,
};
console.log(object);
// ^ constructor function
const newObject = new Object();
newObject.name = "khushi";
newObject.age = 20;
newObject.isAdmin = true;
console.log(newObject);
// ^ Object.create() method
const objContructure = Object.create(null);
console.log(objContructure);
// ^ ES6 Classes
// ^ create a function to add and create object
function Person(name, age, isAdmin) {
  this.name = name;
  this.age = age;
  this.isAdmin = isAdmin;
}
const person1 = new Person("John", 25, false);
const person2 = new Person("Nau", 25, true);
console.log(person1);
console.log(person2);
