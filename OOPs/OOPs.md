# 🏗️ Classes and Instances in JavaScript  

## 1️⃣ What is a Class?  
A **class** is a template or blueprint used to create objects.  
- It defines **properties** (data) and **methods** (functions) that objects will have.  
- **Classes don’t hold actual data;** they only define the structure.

---

## 2️⃣ What is an Instance?  
An **instance** is an actual object created from a class.  
- Each instance has **its own copy** of the properties with specific values.  
- You create an instance using the `new` keyword.

---

## 3️⃣ Real-Life Analogy 🛠️  
Think of a **class** as a recipe for making a cake 🍰.  
- The **recipe** describes ingredients (**properties**) and steps (**methods**) to make the cake.  
- But the **recipe itself is NOT a cake**—it's just **instructions**.  
- An **instance** is an actual cake **baked using the recipe**.  
- You can bake **multiple cakes (instances)** using the same recipe (class), and each cake can have different flavors.

---

# 🎯 Properties and Methods in a Class  

## 1️⃣ What is a Property?  
A **property** is a variable inside a class that holds values.  
- It defines the **state** of an object.  

### 🔹 Example of Properties:
```javascript
class User {
  constructor(name, email) {
    this.name = name;  // Property
    this.email = email; // Property
  }
}
```
### Accessing Properties using an Instance
```javascript
const user1 = new User("Khushi", "khushi@example.com");
console.log(user1.name);  // Output: Khushi
console.log(user1.email); // Output: khushi@example.com
```
---
## 2️⃣ What is a Method?
A method is a function inside a class that performs actions.

It defines behavior for objects.
`
```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Method to login
  login() {
    console.log(${this.name} has logged in);
  }

  // Method to logout
  logout() {
    console.log(${this.name} has logged out);
  }}
```

### Calling Methods using an Instance
```javascript
const user2 = new User("Alice", "alice@example.com");

user2.login();  // Output: Alice has logged in
user2.logout(); // Output: Alice has logged out
```
---
 The constructor is used to initialize the object when it is created.

The method defines what actions the object can perform after it's created.

## What is Inheritance?
Inheritance allows a class to inherit properties and methods from another class. This promotes code reuse and reduces redundancy.

🔹 **Key Terms**:
1️⃣ **Parent Class (Super Class)** → The base class from which properties and methods are inherited.  
2️⃣ **Child Class (Sub Class)** → The class that inherits from the parent class.  
3️⃣ **extends Keyword** → Used to establish inheritance in JavaScript.  
4️⃣ **super() Method** → Calls the constructor of the parent class inside the child class.

🔹 **How Inheritance Works Internally**:  
JavaScript uses **Prototypal Inheritance** behind the scenes. When a method is called on an object:

1. JavaScript first looks inside the object itself.  
2. If the method is not found, it looks in the prototype chain (parent class).  
3. If still not found, it moves up the chain until it reaches `Object.prototype`.

### Method Overriding (Polymorphism)
Child classes can override methods from the parent class.

## Private Properties & Methods (Encapsulation)
We can make properties private using `#` to prevent direct modification.

---

## 1️⃣ What is Encapsulation?  
Encapsulation is the practice of hiding the internal details of a class and only exposing what's necessary.

✅ **Why Use Encapsulation?**
- Prevents accidental modification of important properties.
- Protects sensitive data from being accessed directly.
- Improves maintainability by restricting direct access to object internals.

---

## 2️⃣ What are Private Properties?  
Private properties are variables that cannot be accessed or modified directly outside the class.

### 🔹 How to Define Private Properties?
In JavaScript, we use `#` before a property name to make it private.

---

## 3️⃣ What are Private Methods?  
Private methods are functions inside a class that can only be called within the class.  
Like private properties, they are defined using `#`.

---

## 4️⃣ How Does Encapsulation Work?
- **Private properties/methods (`#`)** → Only accessible inside the class.  
- **Public methods** → Used to interact with private data securely.

---

## 5️⃣ Getter & Setter Methods for Encapsulation  
Since private properties cannot be accessed directly, we use **getter** and **setter** methods to access and modify them safely.=

## 📌 What are Getter & Setter Methods?  
- **Getter (`get`)** → Used to access private properties.  
- **Setter (`set`)** → Used to modify private properties safely.  
- **Encapsulation** → Protects data from being modified directly.  

---

## ✅ Example: Using Getter & Setter  
```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Private property (by convention)
  }

  // Getter method to access the age
  get age() {
    return this._age;
  }

  // Setter method to update the age with validation
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a positive number");
    }
  }
}

// Creating an instance
const user1 = new User("Khushi", 20);

// Accessing property using getter
console.log(user1.age); // Output: 20

// Updating property using setter
user1.age = 25;
console.log(user1.age); // Output: 25

// Trying to set an invalid age
user1.age = -5; // Output: Age must be a positive number


```
// multiple inheritance
// Using Mixins (Object.assign)