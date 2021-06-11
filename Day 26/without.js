const _ = require("lodash");

require("../IOODaysOfPolyFill")(26);

// Creates an array excluding all given values using SameValueZero for equality comparisons.

console.log("lodash implementation\n\n");

const arr = [10, 20, 30, 40, 50, 60];

console.log(_.without(arr, 10, 50));
console.log(_.without(arr, 60, 50));
console.log(_.without(arr, 10, 20, 55));
console.log(_.without(arr, 19, 28, 55));

// My implementation

_.myWithout = function (arr1, ...arr2) {
  // if array1 is not an array return empty array
  if (!Array.isArray(arr1)) return [];

  // if array2 is not an array return arr1
  if (!Array.isArray(arr2)) return arr1;

  // filter the array such that it contains all element of array1 that are not in array2
  return arr1.filter((x) => !arr2.includes(x));
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myWithout(arr, 10, 50));
console.log(_.myWithout(arr, 60, 50));
console.log(_.myWithout(arr, 10, 20, 55));
console.log(_.myWithout(arr, 19, 28, 55));
