const _ = require("lodash");

require("../IOODaysOfPolyFill")(22);

// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

console.log("lodash implementation\n\n");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [5, 2, 4];

console.log(_.union(arr1, arr2));
console.log(_.union(arr2, arr3));
console.log(_.union(arr3, arr1));
console.log(_.union(arr3, arr1));

// My implementation

_.myUnion = function (...args) {
  // store the result
  const unionArray = [];
  let filter;

  // start with the array
  if (Array.isArray(args[0])) unionArray.push(...args[0]);

  // for each argument that is the array
  for (let i = 1; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      // if the elemet is array then filter the elements that are not in union
      filter = args[i].filter((x) => !unionArray.includes(x));

      // spread those element in union
      unionArray.push(...filter);
    }
  }

  return unionArray;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myUnion(arr1, arr2));
console.log(_.myUnion(arr2, arr3));
console.log(_.myUnion(arr3, arr1));
console.log(_.myUnion(arr3, arr1));
