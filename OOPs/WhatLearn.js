class User {
  constructor(name, email, password, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.setRole(role); //method call inside the constructor
  }
  //   method
  setRole(role) {
    const allowedRoles = ["instructor", "student"];
    if (!allowedRoles.includes(role)) {
      console.log("Invalid role! Assigning default role: 'student'");
      this.role = "student";
    } else {
      this.role = role;
    }
  }
  register() {
    console.log(`${this.name} is now registered ${this.role}`);
    return this;
  }
  login() {
    console.log(`${this.name} is now logged in`);
    return this;
  }
  logout() {
    console.log(`${this.name} is now logged out`);
    return this;
  }
}
const user = new User("name", "email@gmail.com", "password", "student");
// console.log(object);
// console.log(user.this.name);
console.log(user.name);
user.register();
