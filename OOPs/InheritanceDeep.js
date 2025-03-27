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
  #notShow() {
    console.log("not show");
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
