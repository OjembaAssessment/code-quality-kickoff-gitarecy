/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countOfRsInArray(ls) {
  //changed all vars to let
  // let count = 0;
  // for (let i = 0; i < ls.length; i++) {
  //   if (ls[i] == "R") {
  //     count++;
  //   }
  // }
  //searching for R globally
  const regex = /R/g;
  if (typeof ls === "string") {
    const count = ls.match(regex).length;
    return count;
  } else if (typeof ls === "object") {
    const count = ls.join("").match(regex).length;
    return count;
  }
}

// const sl = "Robert";
// const ls = ["R", "G", "B", "R", "R"];
// console.log(countOfRsInArray(ls));
// console.log(countOfRsInArray(sl));

// export default cntRbt;
