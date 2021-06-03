require("../IOODaysOfPolyFill")(18);

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// Vanilla fill()
console.log("Vanilla implementation\n\n");

let arr = [10, 20, 30, 40, 50, 60];

console.log(arr.fill(3, 1, 5));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.fill(5));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.fill(9, 2, 200));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.fill(2, 6, 2));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.fill());

// My implementation of fill()
Array.prototype.myFill = function (element, start = 0, end = this.length) {
  // default parameters with the default values

  // this method is destructive in nature
  // store reference of current array
  const currentArray = this;

  // loop from start till array length or the end provided
  // this condition handles the cases where start > end and if end is > length of array
  for (let i = start; i < currentArray.length && i < end; i++) {
    currentArray[i] = element; // copy the element
  }

  return currentArray; // return the current array
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

arr = [10, 20, 30, 40, 50, 60];
console.log(arr.myFill(3, 1, 5));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.myFill(5));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.myFill(9, 2, 200));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.myFill(2, 6, 2));
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.myFill());
