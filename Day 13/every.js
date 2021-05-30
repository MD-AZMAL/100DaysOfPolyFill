require("../IOODaysOfPolyFill")(13);

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const arr = [10, 20, 30, 40, 50];

// Vanilla every()
console.log("Vanilla implementation\n\n");

console.log(arr.every((ele) => ele > 20));
console.log(arr.every((ele) => ele < 100));
console.log(arr.every((ele) => ele));
// console.log(arr.every());

// My implementation of every()
Array.prototype.myEvery = function (cb) {
  // the implementation is similar to other callback based methods

  const currentArray = this; // store current refenece of the array
  let everyConditionSatisfied = true; // to final boolean result

  if (typeof cb != "function")
    throw new TypeError(`${cb} not a valid function`);

  for (let i = 0; i < currentArray.length; i++)
    if (!cb(currentArray[i], i, currentArray)) { // if the condition fails anywhere
      everyConditionSatisfied = false; // update the condition variable and leave the loop
      break;
    }

  return everyConditionSatisfied;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myEvery((ele) => ele > 20));
console.log(arr.myEvery((ele) => ele < 100));
console.log(arr.myEvery((ele) => ele));
console.log(arr.myEvery());
