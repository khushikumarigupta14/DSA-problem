// 4. Subset and Superset
// Subset: An array is a subset of another if all its elements exist in the other array.
// Superset: An array is a superset of another if it contains all elements of the other array.
// 5. Disjoint Sets
// Two arrays are disjoint if they have no elements in common.c
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [16, 17, 18, 19, 20];
// arr2 is subset of arr1
// arr1 is superset of arr2
// arr3 is disjoint of arr1 adn arr2 both
// subset logic
const arrSubset = arr2.every((elem) => arr1.includes(elem));
console.log(arrSubset); //true

function ArrSubsetFuncOptimized(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.every((elem) => set1.has(elem)); //every element in arr2 exists in arr1
}

console.log(ArrSubsetFuncOptimized([6, 7, 8, 9, 10], [7, 8, 9])); // true
console.log(ArrSubsetFuncOptimized([6, 7, 8, 9, 10], [1, 2, 3])); // false
