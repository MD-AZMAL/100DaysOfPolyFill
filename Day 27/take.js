const _ = require("lodash");

require("../IOODaysOfPolyFill")(27);

// Creates a slice of array with n elements taken from the beginning.

console.log("lodash implementation\n\n");

const arr = [10, 20, 30, 40, 50, 60];

console.log(_.take(arr));
console.log(_.take(arr, 2));
console.log(_.take(arr, 20));
console.log(_.take("arr", 2));
console.log(_.take(12, 2));

// My implementation

_.myTake = function (arr, size = 1) {
  // if not an array and is a string convert that string to array

  if (!Array.isArray(arr) && typeof arr === "string") arr = arr.split("");

  //   if not an array return empty array
  if (!Array.isArray(arr)) return [];

  //   filter the array till the index is less than size
  return arr.filter((ele, ind) => ind < size);
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myTake(arr));
console.log(_.myTake(arr, 2));
console.log(_.myTake(arr, 20));
console.log(_.myTake("arr", 2));
console.log(_.myTake(12, 2));