"use strict";

//1

// function sumTwoSmallestNumbersShort(...array) {
//   const sortedArray = array.sort((a, b) => a - b);
//   let sum = sortedArray[0] + sortedArray[1];

//   if (sortedArray.length <2) {
//     console.error("Введите минимум 2 числа");
//   }
//   else{
//     return sum;
//   }
// }

// console.log(sumTwoSmallestNumbersShort(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbersShort(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbersShort(1)); // undefined и отдельный console.error("...")