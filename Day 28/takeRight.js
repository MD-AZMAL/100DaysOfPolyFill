const _ = require("lodash");

require("../IOODaysOfPolyFill")(28);

// Creates a slice of array with n elements taken from the end.

console.log("lodash implementation\n\n");

const arr = [10, 20, 30, 40, 50, 60];

console.log(_.takeRight(arr));
console.log(_.takeRight(arr, 2));
console.log(_.takeRight(arr, 20));
console.log(_.takeRight("arr", 2));
console.log(_.takeRight(12, 2));

// My implementation

_.myTakeRight = function (arr, size = 1) {
  // if not an array and is a string convert that string to array

  if (!Array.isArray(arr) && typeof arr === "string") arr = arr.split("");

  //   if not an array return empty array
  if (!Array.isArray(arr)) return [];

  //   if size is greater or equal return the original array instead
  if (arr.length <= size) return arr;

  const takeRightArr = [];

  // set start index to length - size + 1 and take the array till the end
  for (let i = arr.length - size ; i < arr.length; i++)
    takeRightArr.push(arr[i]);

  return takeRightArr;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myTakeRight(arr));
console.log(_.myTakeRight(arr, 2));
console.log(_.myTakeRight(arr, 20));
console.log(_.myTakeRight("arr", 2));
console.log(_.myTakeRight(12, 2));
