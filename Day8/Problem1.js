// Explain the key features introduced in Javascript ES6
// arrow function
const SumUnc = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
// template string
const Sum = (...args) => {
  console.log(args); // [1, 2, 3, 4, 5]
};
Sum();
// destructuring
const obj = {
  name: "John",
  age: 25,
  year: 2025,
};
const { name, age } = obj;
console.log(obj);
// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
// rest operator
const arr = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;
console.log(first); // 1
