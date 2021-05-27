require("../IOODaysOfPolyFill")(11);

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const arr = [10, 20, 30, 10, 40, 50];

// Vanilla includes()
console.log("Vanilla implementation\n\n");

console.log(arr.includes(10));
console.log(arr.includes(10, 2));
console.log(arr.includes(100));

// My implementation of includes()
Array.prototype.myIncludes = function (element, start = 0) {
  // store current reference of the array
  const currentArray = this;

  let found = false;

  // loop through from start to check if element exist
  for (let i = start; i < currentArray.length; i++) {
    if (currentArray[i] === element) {
      found = true; // if found update the found variable
      break;
    }
  }
  return found;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myIncludes(10));
console.log(arr.myIncludes(10, 2));
console.log(arr.myIncludes(100));
