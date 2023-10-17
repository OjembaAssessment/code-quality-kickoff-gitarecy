/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1

//function counts 'R' characters in array or string
export default function countOfR(item) {
  //searching for R globally in array or string
  const regex = /R/g;
  //statement searches for R if the item is of string type
  if (typeof item === "string") {
    const count = item.match(regex).length;
    return count;
    //statement searches for R if the item is of object type
  } else if (typeof item === "object") {
    const count = item.join("").match(regex).length;
    return count;
  }
}
