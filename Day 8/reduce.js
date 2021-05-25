require("../IOODaysOfPolyFill")(8);

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const arr = [10, 20, 30, 40, 50];

// Vanilla reduce()
console.log("Vanilla implementation\n\n");

let sum = arr.reduce((acc, ele) => {
  acc += ele;
  return acc;
});

let filterIndexArr = arr.reduce((acc, ele, ind) => {
  if (ind % 2 == 0) acc.push(ele);
  return acc;
}, []);

console.log(sum);
console.log(filterIndexArr);

// My implementation of reduce()
Array.prototype.myReduce = function (cb, initialValue) {
  // Store the reference of current array
  const currentArray = this;

  // if initialValue is not provided then the first element of array becomes the initial value and  iteration starts from second index of the array
  let accumulator = initialValue ? initialValue : currentArray[0];
  const startIndex = initialValue ? 0 : 1;

  // loop through array from starting index and store it in accumulator
  for (let i = startIndex; i < currentArray.length; i++) {
    accumulator = cb(accumulator, currentArray[i], i, currentArray);
  }

  return accumulator;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

sum = arr.myReduce((acc, ele) => {
  acc += ele;
  return acc;
});

filterIndexArr = arr.myReduce((acc, ele, ind) => {
  if (ind % 2 == 0) acc.push(ele);
  return acc;
}, []);

console.log(sum);
console.log(filterIndexArr);
