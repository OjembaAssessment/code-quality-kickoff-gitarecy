/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function findFoodItems(items) {
  // const processedItems = [];
  // for (let i = 0; i < items.length; i++) {
  //   const item = items[i];
  //   if (item.type === "Food") {
  //     processedItems.push(item);
  //   }
  // }
  const arr = items.filter((item) => item.type === "Food");
  return arr;
}

// const items = [
//   { type: "Food", name: "Apple" },
//   { type: "Drink", name: "Water" },
//   { type: "Food", name: "Banana" },
// ];
// console.log(findFoodItems(items));
