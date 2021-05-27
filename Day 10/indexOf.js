require("../IOODaysOfPolyFill")(10);

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const arr = [10, 20, 30, 10, 40, 50];

// Vanilla indexOf()
console.log("Vanilla implementation\n\n");

console.log(arr.indexOf(10));
console.log(arr.indexOf(10, 2));
console.log(arr.indexOf(100));

// My implementation of indexOf()
Array.prototype.myIndexOf = function (element, start = 0) {
  // store current reference of the array
  const currentArray = this;

  let found = -1; // location of element if found

  // loop through from start to check if element exist
  for (let i = start; i < currentArray.length; i++) {
    if (currentArray[i] === element) {
      found = i; // if found update the found variable
      break;
    }
  }
  return found;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myIndexOf(10));
console.log(arr.myIndexOf(10, 2));
console.log(arr.myIndexOf(100));