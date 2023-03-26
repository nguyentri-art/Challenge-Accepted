// This problem was asked by Amazon.
// Given a string, determine whether any permutation of it is a palindrome.
// For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome
// daily should return false, since there's no rearrangement that can form a palindrome.

// var stringT = 256;

// let str = "aloneenola";

// function sortResult(str) {
//   let count = Array(stringT).fill(0);
//   console.log("This is a Count" + count);

//   for (let i = 0; i < str.length; i++) {
//     count[str[i].charCodeAt()]++;
//   }

//   let odd = 0;

//   for (let i = 0; i < stringT; i++) {
//     console.log("my count[i] " + count[i]);

//     console.log("count[i]" + (count[i] & 1) == 1);

//     // count[i] AND 1
//     if ((count[i] & 1) == 1) {
//       odd++;
//     }

//     console.log("my odd" + odd);

//     if (odd > 1) return false;
//   }

//   return true;
// }

// console.log(sortResult(str));

// let mytest = 6;

// let myresult = false;

// let checkthing = [];

// for (let i = 0; i < mytest.lenght; i++) {
//   console.log((mytest[i] & 1) == 1);

//   if ((mytest[i] & 1) == 1) {
//     return (checkthing += checkthing.concat(i));
//   }

//   return myresult == true;
// }

// console.log(myresult);
// console.log(checkthing);

// with aglorighatm O(n^2);
// With Binary - search

let contrainer;

const resutF = (n) => {};

let resultR = [4, 19, 2, 10, 20, 8];
