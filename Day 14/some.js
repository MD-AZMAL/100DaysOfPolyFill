require("../IOODaysOfPolyFill")(14);

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const arr = [10, 20, 30, 40, 50];

// Vanilla some()
console.log("Vanilla implementation\n\n");

console.log(arr.some((ele) => ele > 20));
console.log(arr.some((ele) => ele % 11 === 0));
console.log(arr.some((ele) => ele));

// My implementation of some()
Array.prototype.mySome = function (cb) {
  // the implementation is similar to other callback based methods

  const currentArray = this; // store current refenece of the array
  let someConditionSatisfied = false; // to final boolean result

  if (typeof cb != "function")
    throw new TypeError(`${cb} not a valid function`);

  for (let i = 0; i < currentArray.length; i++)
    if (cb(currentArray[i], i, currentArray)) {
      // if the condition passes anywhere
      someConditionSatisfied = true; // update the condition variable and leave the loop
      break;
    }

  return someConditionSatisfied;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.mySome((ele) => ele > 20));
console.log(arr.mySome((ele) => ele % 11 === 0));
console.log(arr.mySome((ele) => ele));
console.log(arr.mySome());

