// Find the Missing Number in an Array (1 to N)
// sequence of number

function MissingNumber(arr, N) {
  //   const N = arr.length;
  const logic = 1 + (N - 1) * 1;
  return logic;
}
console.log(MissingNumber([1, 5, 8, 9, 6, 7, 4, 10], 11));
// 🔹 1. Arithmetic Sequence (Common Difference)
// If the numbers have a constant difference between them:
// ✅ Formula:
// Missing Number =Previous Term+Common Difference (d)
