// spread and rest operator
function addNumbers(a, b, c, ...n) {
  console.log(n);
  console.log(arguments);
  console.log(n[0]);

  return a + b + c + n;
}
const res = addNumbers(4, 8, 9, 5, 8, 9, 7);
// const res1 = addNumbers(...[1, 4, 8, 8, 5, 9]);
console.log(res);
// console.log(res1);
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element
