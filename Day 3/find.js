require("../IOODaysOfPolyFill")(3);

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const arr = [10, 20, 30, 40, 50];

// Vanila find()
console.log("Vanila implementation\n\n");

console.log(arr.find((e, ind) => e > 20 && ind > 2));
console.log(arr.find((e) => e < 2));

// My implementation of find
Array.prototype.myFind = function (cb) {
  // store the current reference of the array in a variable
  const currentArray = this;

  // check if cb is not a function and throw error
  if (typeof cb != "function")
    throw new TypeError(`${cb} not a valid function`);

  // after cheking run the callback on each item
  // by passing appropriate arguments to call back

  for (let i = 0; i < currentArray.length; i++) {
    if (cb(currentArray[i], i, currentArray))
      // if found return it
      return currentArray[i];
  }

  // else it automatically returns undefined if criteria is not satisfied
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myFind((e, ind) => e > 20 && ind > 2));
console.log(arr.myFind((e) => e < 2));
console.log(arr.myFind());
