const _ = require("lodash");

require("../IOODaysOfPolyFill")(25);

// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

console.log("lodash implementation\n\n");

console.log(_.uniq([1, 2, 3, 4]));
console.log(_.uniq([1, 2, 2, 4]));
console.log(_.uniq([1, "2", 2, 4]));
console.log(_.uniq("asas"));
console.log(_.uniq(124));

// My implementation

_.myUniq = function (arr) {
  // if not an array and is a string convert that string to array

  if (!Array.isArray(arr) && typeof arr === "string") arr = arr.split("");

  //   if not an array return empty array
  if (!Array.isArray(arr)) return [];

  // store result
  const uniq = [];

  //   push those elements that are not in uniq and return it
  for (let i = 0; i < arr.length; i++) {
    if (!uniq.includes(arr[i])) uniq.push(arr[i]);
  }

  return uniq;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(_.myUniq([1, 2, 3, 4]));
console.log(_.myUniq([1, 2, 2, 4]));
console.log(_.myUniq([1, "2", 2, 4]));
console.log(_.myUniq("asas"));
console.log(_.myUniq(124));
