const myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    // const childValue = 5;
    // console.log(childValue);
    console.log((myValue += 1));
  };
  //   console.log(childValue); //not defined
  return childFunction;
  //   childFunction();
};
// console.log(childValue);
// myFunction();
const result = myFunction();
console.log(result);
result();
result();
result();
