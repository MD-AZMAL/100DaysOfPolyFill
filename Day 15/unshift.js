require("../IOODaysOfPolyFill")(15);

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const arr = [10, 20, 30, 40, 50];

// Vanilla unshift()
console.log("Vanilla implementation\n\n");

console.log(arr.unshift(4, 5));
console.log(arr);

// My implementation of unshift()
Array.prototype.myUnshift = function (...args) {
  // store the reference of current array
  const currentArray = this;

  // shift the elements from last by the length of args array
  for (let i = currentArray.length - 1; i >= 0; i--) {
    currentArray[i + args.length] = currentArray[i];
  }

  // copy the args array from begining
  for (let i = 0; i < args.length; i++) {
    currentArray[i] = args[i];
  }

  // return the length
  return currentArray.length;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

const arr2 = [10, 20, 30, 40, 50];

console.log(arr2.myUnshift(4, 5));
console.log(arr2);
