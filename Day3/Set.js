const set = new Set(["a", "b", "c"]);
console.log(set, typeof set);
const newSet = (1, 5, 8, 9, 9, 5, 6, 1);
console.log(newSet);
// empty set
const mySet = new Set();
console.log(mySet); // Output: Set {}
// 2️⃣ Initialize a Set with Values
// You can pass an iterable object (like an array) to the Set constructor:
const setWithValue = new Set([1, 2, 3, 4, 4]);
console.log(setWithValue); // Output: Set { 1, 2, 3, 4 }

// 3️⃣ Add Values to a Set
// You can add elements using the .add() method:
const AddValueToSet = new Set();
AddValueToSet.add(10);
AddValueToSet.add(20);
AddValueToSet.add(30);
console.log(AddValueToSet); // Output: Set { 10, 20, 30 }
// 4️⃣ Create a Set from Another Collection
// You can create a Set from other iterable collections, like a string or array:

// From String
const stringToSet = new Set("hello");
console.log(stringToSet); // Output: Set { 'h', 'e', 'l', 'o' }
// From Array

const stringToArray = new Set([1, 2, 3, 1, 2]);
console.log(stringToArray); // Output: Set { 1, 2, 3 }
// 5️⃣ Use Object or Array Methods to Populate a Set
// You can combine array manipulation or object methods with Set initialization:
const numbers = [1, 1, 2, 3, 5, 8, 13, 13];
const uniqueSet = new Set(numbers);
console.log(uniqueSet); // Output: Set { 1, 2, 3, 5, 8, 13 }
// mixed representation
const mixedSet = new Set([1, "hello", true, { key: "value" }, [1, 2, 3]]);
console.log(mixedSet);
