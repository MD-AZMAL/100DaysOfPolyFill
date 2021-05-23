require("../IOODaysOfPolyFill")(7);

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const arr = [10, 20, 30, 40, 50, 60, 70];

// Vanilla slice()
console.log("Vanilla implementation\n\n");

console.log(arr.slice(2));
console.log(arr.slice(2, 5));
console.log(arr.slice(2, 80));
console.log(arr.slice());

// My implementation of slice()
Array.prototype.mySlice = function (start, end) {
  // Store the reference of current array
  const currentArray = this;

  // make a variable to store sliced array
  const slicedArray = [];

  // check if start is not undefined, otherwise set the start to by default zero
  start = start ? start : 0;

  // check if end is not undefined, in which case check if end is less than current array length
  // otherwise set end to current array length
  end = end
    ? end < currentArray.length
      ? end
      : currentArray.length
    : currentArray.length;

  // loop from the start to end-1 indices and push element into the slicedArray from currentArray
  for (let i = start; i < end; i++) {
    slicedArray.push(currentArray[i]);
  }

  return slicedArray;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.mySlice(2));
console.log(arr.mySlice(2, 5));
console.log(arr.mySlice(2, 80));
console.log(arr.mySlice());
