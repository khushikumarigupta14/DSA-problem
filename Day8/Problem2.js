// What is hoisting in Javascript?
// printHello();
// function printHello() {
//   console.log("hello");
// }

printHello(); //declared in global scope
// hello

// printDillion(); //declared in local scope
// ReferenceError: printDillion is not defined

function printHello() {
  printDillion();
  console.log("hello");

  function printDillion() {
    console.log("dillion");
  }
}
// a function called inside function

// varibale hositing
// console.log(name);
// // undefined
// var name = "khuhi";
// console.log(name);

// console.log(name); //reference error: Cannot access 'name' before initialization(variable is not defined)
// undefined
let name = "khuhi";
console.log(name);

// ^ The variables are hoisted to the top of the scope they are declared in (local, global, or block), but are not accessible because they have not been initialized.
// * clASS
// Classes in JavaScript are also hoisted.
// ReferenceError: Cannot access 'Animal' before initialization

class Animal {
  constructor(name) {
    this.name = name;
  }
}
const Dog = new Animal("Bingo");
console.log(Dog);
// { name: 'Bingo' }
