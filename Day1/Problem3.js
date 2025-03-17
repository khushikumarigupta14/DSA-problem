// count the number of digits of a number

function NumberOfDigit(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(NumberOfDigit(5056));
console.log(NumberOfDigit(565));
console.log(NumberOfDigit(505566));
console.log(NumberOfDigit(505656569889464));
