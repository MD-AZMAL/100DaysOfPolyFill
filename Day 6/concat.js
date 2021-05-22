require("../IOODaysOfPolyFill")(6);

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const arr1 = [1, 2, 3];
const val2 = 4;
const arr2 = [9, 8];

// Vanila concat()
console.log("Vanila implementation\n\n");

console.log(arr1.concat(val2, arr2));
console.log(arr1.concat(() => console.log("hi")));
console.log(arr1.concat());

// My implementation of concat()
Array.prototype.myConcat = function (...args) {
  // store this reference of array
  const currentArray = this;

  // make a new array to store concatenated values
  const concatenatedArray = [...currentArray]; // starts with currentArray

  // loop through arguments and append them to the concatenatedArray
  // if an argument is array then speread it, and push

  args.forEach((arg) => {
    if (Array.isArray(arg)) concatenatedArray.push(...arg);
    else concatenatedArray.push(arg);
  });

  return concatenatedArray;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr1.myConcat(val2, arr2));
console.log(arr1.myConcat(() => console.log("hi")));
console.log(arr1.myConcat());
