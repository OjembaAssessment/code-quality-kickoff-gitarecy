/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(numbers) {
  // let largest = numbers[0];
  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[i] > largest) {
  //     largest = numbers[i];
  //   }
  // }
  //return largest;
  return Math.max(...numbers);
}

// const arr = [2, 6, 8, 9, 10];
// console.log(findLargestNumber(arr));

//export default findLargestNumber;
