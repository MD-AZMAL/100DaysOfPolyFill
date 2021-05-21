require("../IOODaysOfPolyFill")(5);

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr = [10, 20, 30, 40, 50];

// Vanila map()
console.log("Vanila implementation\n\n");

console.log(arr.map((ele, ind) => ele * ind));
console.log(arr.map((ele) => ele / 10));

// My implementation of map()
Array.prototype.myMap = function (cb) {
  // the implementation is similar to filter
  // but here we simply append the element returned by the callback the condition to an array and later return it

  const currentArray = this; // store current refenece of the array
  const mappedArray = []; // to store elements returned by the callback

  if (typeof cb != "function")
    throw new TypeError(`${cb} not a valid function`);

  for (let i = 0; i < currentArray.length; i++) {
    mappedArray.push(cb(currentArray[i], i, currentArray));
  }

  return mappedArray;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myMap((ele, ind) => ele * ind));
console.log(arr.myMap((ele) => ele / 10));
console.log(arr.myMap());
