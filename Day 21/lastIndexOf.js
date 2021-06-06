require("../IOODaysOfPolyFill")(21);

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// Vanilla lastIndexOf()
console.log("Vanilla implementation\n\n");

const arr = [1, 1, 2, 3, 4, 5, 3, 1, 10];

console.log(arr.lastIndexOf(2));
console.log(arr.lastIndexOf(1));
console.log(arr.lastIndexOf(1, 3));
console.log(arr.lastIndexOf(100));

// My implementation of lastIndexOf()
Array.prototype.myLastIndexOf = function (element, from = this.length - 1) {
  // store current reference of the array
  const currentArray = this;

  let index;

  // loop through from backwards and check for the element
  for (index = from; index > -1; index--) {
    if (currentArray[index] === element) break;
  }

  return index;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myLastIndexOf(2));
console.log(arr.myLastIndexOf(1));
console.log(arr.myLastIndexOf(1, 3));
console.log(arr.myLastIndexOf(100));