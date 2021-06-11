const _ = require("lodash");

require("../IOODaysOfPolyFill")(23);

// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

console.log("lodash implementation\n\n");

const arr = [10, 20, 30, 40, 50, 60];

console.log(_.difference(arr, [10, 50]));
console.log(_.difference(arr, [60, 50]));
console.log(_.difference(arr, [10, 20, 55]));
console.log(_.difference(arr, [19, 28, 55]));

// My implementation

_.myDifference = function (arr1, arr2) {
  // if array1 is not an array return empty array
  if (!Array.isArray(arr1)) return [];

  // if array2 is not an array return arr1
  if (!Array.isArray(arr2)) return arr1;

  // filter the array such that it contains all element of array1 that are not in array2
  return arr1.filter((x) => !arr2.includes(x));
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myDifference(arr, [10, 50]));
console.log(_.myDifference(arr, [60, 50]));
console.log(_.myDifference(arr, [10, 20, 55]));
console.log(_.myDifference(arr, [19, 28, 55]));
