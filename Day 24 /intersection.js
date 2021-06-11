const _ = require("lodash");

require("../IOODaysOfPolyFill")(24);

// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

console.log("lodash implementation\n\n");

const arr = [10, 20, 30, 40, 50, 60];

console.log(_.intersection(arr, [1, 2, 3]));
console.log(_.intersection(arr, [10, 20, 60]));
console.log(_.intersection(arr, arr));
console.log(_.intersection("arr", arr));
console.log(_.intersection(arr, "arr"));

// My implementation

_.myIntersection = function (arr1, arr2) {
  // if any one argument is not an array return empty array
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  // filter the array such that it contains all element of array1 that are not in array2
  return arr1.filter((x) => arr2.includes(x));
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myIntersection(arr, [1, 2, 3]));
console.log(_.myIntersection(arr, [10, 20, 60]));
console.log(_.myIntersection(arr, arr));
console.log(_.myIntersection("arr", arr));
console.log(_.myIntersection(arr, "arr"));
