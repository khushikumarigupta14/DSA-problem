// es6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    console.log("Encrypting password...");
    return `${this.password} encrypted password`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()} changed username`;
  }
}
const chai = new User("chai", "chai@gmail.com", "25898");
console.log(User);
console.log(chai);
console.log(chai.changeUsername());
console.log(chai.encryptPassword());
// class
// constructor
// this
// behind the scene
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  return;
}
User1.prototype.encryptPassword = function () {
  console.log("Encrypting password...");
  return `${this.password} encrypted password`;
};
User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()} changed username`;
};

const tea = new User1("tea", "tea@gmail.com", "25898");
console.log(User1);
console.log(tea);
console.log(tea.changeUsername());
console.log(tea.encryptPassword());
