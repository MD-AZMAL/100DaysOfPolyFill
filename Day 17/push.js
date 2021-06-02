require("../IOODaysOfPolyFill")(17);

// The push() method adds one or more elements to the end of an array and returns the new length of the array.

const arr = [1, 2, 3, 4];

// Vanilla push()
console.log("Vanilla implementation\n\n");
console.log(arr.push(5));
console.log(arr);
arr.push(6, 7, 8);
console.log(arr);

// My implementation of push()
Array.prototype.myPush = function (...args) {
  // store the this reference
  const currentArray = this;

  // copy each element in args to the last index + 1 of currentArray
  // since the length will automatically increase so refering the length gives you last + 1 index
  for (let i = 0; i < args.length; i++) {
    currentArray[currentArray.length] = args[i];
  }

  // return the new length of the array
  return currentArray.length;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

const arr2 = [1, 2, 3, 4];

console.log(arr2.myPush(5));
console.log(arr2);
arr2.myPush(6, 7, 8);
console.log(arr2);
