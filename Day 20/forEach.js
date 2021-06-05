require("../IOODaysOfPolyFill")(20);

// The forEach() method executes a provided function once for each array element.

// Vanilla forEach()
console.log("Vanilla implementation\n\n");

const arr = [1, 2, 3];

arr.forEach((element) => console.log(element * 2));
console.log("---");
arr.forEach((ele, index, array) => console.log(ele * index + array[0]));

// My implementation of forEach()
Array.prototype.myForEach = function (cb) {
  // store current reference of the array
  const currentArray = this;

  // loop throw each element and run the callback
  for (let i = 0; i < currentArray.length; i++)
    cb(currentArray[i], i, currentArray);
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

arr.myForEach((element) => console.log(element * 2));
console.log("---");
arr.myForEach((ele, index, array) => console.log(ele * index + array[0]));
