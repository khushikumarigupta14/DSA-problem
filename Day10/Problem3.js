// . Explain how Array.reduce() works with an example.
const numbers = [1, 4, 7, 8, 9, 4, 1];
const sum = numbers.reduce((accumulator, current)=> accumulator + current, 0)
 console.log(sum); // 10
