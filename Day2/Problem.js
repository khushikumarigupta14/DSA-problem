// palindrome sequence
// string and number
// const palindrome = "madam";

function StrinPalindrom(palindrome) {
  const splitReverse = palindrome.split("").reverse().join("");
  console.log(splitReverse);

  const isPalindrome = palindrome === splitReverse;

  return `Palindrome check: ${isPalindrome}, palindrome is ${isPalindrome}`;
}
console.log(StrinPalindrom("madam"));
console.log(StrinPalindrom("palindrowm"));

function NumberPalindrome(num) {}
// * string method to check palindrom in number
// const num = 121;
// const numArr = num.toString();
// console.log(numArr);
// const numArrSplit = numArr.split("").reverse().join("");
// const numArrSplitToNum = parseInt(numArrSplit);
// const check = numArr === numArrSplit;
// const checkNum = num === numArrSplitToNum;
// console.log(check,checkNum); //true true
