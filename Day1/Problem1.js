// n(n + 1) / 2; //^ arithmetic progression

function SumOfAllNaturalNum(n) {
  return (n * (n + 1)) / 2;
}
console.log(SumOfAllNaturalNum(1));
console.log(SumOfAllNaturalNum(2));
console.log(SumOfAllNaturalNum(3));

// ^ using loop

function SumUsingLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // sum += i;
    sum = sum + i;
  }
  return sum;
}

console.log(SumUsingLoop(1));
console.log(SumUsingLoop(2));
console.log(SumUsingLoop(3));
