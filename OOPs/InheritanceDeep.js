// inheritance --> parent(super) to child(sub)
// crating parent class
class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(this.name, this.age); //print name and age
  }
  #notShow() {
    console.log("not show");
  }
}
class Parent1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(this.name, this.age);
  }
  OverRide() {
    console.log("OverRide method");
  }
}
const parent = new Parent("John", 10);
// creating child class
class Child extends Parent {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
  display() {
    console.log(this.name, this.age, this.school);
  }
  OverRide() {
    console.log("OverRide method in child class");
  }
}
const child = new Child("John", 10, "ABC School");
child.show();
child.display();
child.OverRide(); // OverRide method in child class
// child.notShow(); // not show
parent.show(); // John 10
// parent.notShow()
// console.log(parent.notShow())
// Output: John 10
//         John 10 ABC School
function User(name, email) {
  this.name = name;
  this.age = age;
}
User.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};
function User1(name, email) {
  name = "John";
  age = 25;
}

// ^ conclusion
// 1. Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and organization.
// private  data not accessible outside the class
// 2. The constructor method is a special method for creating and initializing an object created with a class.
// 3. The super() function is used to call the constructor of the parent class, allowing the child class to inherit properties from the parent.
// 4. The prototype property allows you to add methods and properties to an object after it has been created, enabling dynamic behavior.
