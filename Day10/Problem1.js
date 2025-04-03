const run = { name: "khushi", total: 0 };
// const otherrun = run;
const otherrun = { ...run };
otherrun.total = 20;
console.log(run);
console.log(otherrun);
// console.log(run);
// Objects are reference types in JavaScript. When you assign one object to another variable, you're assigning the reference to the same object, not a copy of it.

// Changing the properties of one will affect the other because they both point to the same object in memory, regardless of whether the variable is declared with let or const.
