//  Find the Intersection and Union of Two Arrays
// intersection
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arrIntersection = arr1.filter((elem) => arr2.includes(elem));
console.log(arrIntersection);

// union
const arrSet1 = new Set(arr1);
const arrSet2 = new Set(arr2);
const arrUnion = [...arrSet1, ...arrSet2];
console.log(arrUnion);
console.log(typeof arrUnion); //wrong way to check array union
console.log(Array.isArray(arrUnion));
console.log(Array.isArray(arrUnion));
// Array is a built-in constructor function used to create array objects.
// Array.isArray() is a method that checks whether a given value is an array.
console.log(arrUnion instanceof Set);
// complement not include
const arrComplement = arr1.filter((elem) => !arr2.includes(elem));
console.log(arrComplement);