//  Given an array of numbers, return an array containing only prime numbers.
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
function PrimeNumber(num) {
  const filterPrime = arr.filter((filt) => !filt % num);
  return filterPrime
}
console.log(PrimeNumber(3))