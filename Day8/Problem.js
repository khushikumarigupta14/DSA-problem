// what is closure in js ? with example

function Outer(outer) {
  return function inner(inner) {
    console.log(outer);
    console.log(inner);
  };
}
const newFunction = Outer("outer value");
newFunction("inner value"); // outer value inner value
