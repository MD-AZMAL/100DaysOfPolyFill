require("../IOODaysOfPolyFill")(4);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const arr = [10, 20, 30, 40, 50];

// Vanila filter()
console.log("Vanila implementation\n\n");

console.log(arr.filter((e, ind) => e > 20 && ind > 2));
console.log(arr.filter((e) => e % 200 === 0));

// My implementation of filter()
Array.prototype.myFilter = function (cb) {
  // the implementation is similar to find
  // but here we simply append the element satisfying the condition to an array and then return it

  const currentArray = this; // store current refenece of the array
  const filteredArray = []; // to store elements satisfying the condition

  if (typeof cb != "function")
    throw new TypeError(`${cb} not a valid function`);

  for (let i = 0; i < currentArray.length; i++) {
    if (cb(currentArray[i], i, currentArray))
      filteredArray.push(currentArray[i]);
  }

  return filteredArray;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myFilter((e, ind) => e > 20 && ind > 2));
console.log(arr.myFilter((e) => e % 200 === 0));
console.log(arr.myFilter());
