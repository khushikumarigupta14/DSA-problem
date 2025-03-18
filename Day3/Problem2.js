// Find the Frequency of Each Element in an Array

//  Remove Duplicates from an Array
const arr = [
  4,
  5,
  9,
  89,
  true,
  "khushi",
  56,
  8,
  6,
  4,
  "khushi",
  "muskan",
  true,
  true,
  45,
  false,
  true,
];
// remove element using set
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
//  remove element using filter
const uniqueArrFilter = arr.filter(
  (item, index) => arr.indexOf(item) === index
);
console.log(uniqueArrFilter);
const frequency = arr.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

// remove duplicate elemtne
//  1. array --> set
// 2. set --> array
