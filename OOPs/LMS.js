// // User --> student or instructor or admin
// const User = {
//   name: "UserName",
//   role: "student",
//   email: "useremailaccount@gmail.com",
// };
// const Student = {
//   enrollCourse(course) {
//     console.log(`${this.name} enrolled in ${course}`);
//   },
// };
// const instructor = {
//   teach(course) {
//     console.log(`${this.name} is teaching ${course}`);
//   },
//   createCourse(course) {
//     console.log(`${this.name} created the course ${course}`);
//   },
// };
// const admin = {
//   addCourse(course) {
//     console.log(`${this.name} added the course ${course}`);
//   },
//   deleteCourse(course) {
//     console.log(`${this.name} deleted the course ${course}`);
//   },
// };
// Object.setPrototypeOf(Student, User);

class User {
  //^ constructor
  // name and email --> parameters
  // These parameters receive values when an instance is created.
  constructor(name, email) {
    this.name = name; //The this keyword refers to the current instance of the class.
    this.email = email;
  }
  //^ Method
  login() {
    console.log(`${this.name} has logged in`);
    return this;
  }
  //^ Method
  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
}

// user--> login --> choose role --> student or instructor --> student --> enrollCourse(course) --> logout
// user--> login --> choose role --> student or instructor --> instructor --> teach(course) --> logout
// user--> login --> choose role --> student or instructor --> admin --> addCourse(course) --> logout
// extends is inheritance in classes
// Student class inherits from User (by extends keyword)
class Student extends User {
  //^ constructor
  constructor(name, email, course) {
    super(name, email); // Call parent constructor
    this.course = course;
  }
  //^ Method
  enrollCourse() {
    console.log(`${this.name} enrolled in ${this.course}`);
    return this;
  }
}
// Creating User instance
                      //name             email          
const user = new User("Khushi", "khushi@example.com");
console.log(user); // Prints the User object with name and email

// Creating Student instance (Fixed)
const student = new Student("Khushi", "khushi@example.com", "JavaScript");
console.log(student); // Prints the Student object with name, email, and course

// Testing Methods
user.login().logout(); // Khushi logs in and logs out
student.enrollCourse().login().logout(); // Khushi enrolls in JavaScript, logs in, then logs out
// Method → A function inside a class is called a method.

// Function → A function outside of a class is simply a function.
