//*   Sum of digits of a number
// 45695 = 4+5+6+9+5=

function SumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(SumOfDigits(1287))
console.log(SumOfDigits(64))
console.log(SumOfDigits(46))