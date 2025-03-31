// console.log(typeof null)
// console.log(typeof undefined); // undefined
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof (() => {})); // function
console.log(typeof null); // object
// why is null an object in js ?
// null primitive data type
// null is falsy value (seven)

function isPrimitive(value) {
  return value !== Object(value); // If value is not an object, it's primitive
}
console.log("is primitive value",isPrimitive(null));
function isObject(value) {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

console.log(isObject(null));
// When JavaScript was first created, values were stored in memory with type tags. The type tags were used to determine the data type of a value.
// The value null was represented internally as 0x00 (all zero bits) in memory.

// Because null was all zeros, JavaScript mistakenly identified it as an object.
