require("../IOODaysOfPolyFill")(12);

// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// it is destructive in nature (modifies the original array)

const arr = [1, 2, 3];

// Vanilla reverse()
console.log("Vanilla implementation\n\n");

console.log(arr.reverse());
console.log(arr);

// My implementation of reverse()
Array.prototype.myReverse = function () {
  // store current reference of the array
  const currentArray = this;

  // for swapping
  let temp;
  let size = currentArray.length; // size of the array

  // swap the first to last elements until you reach mid

  for (let i = 0; i < size / 2; i++) {
    temp = currentArray[i];
    currentArray[i] = currentArray[size - i - 1];
    currentArray[size - i - 1] = temp;
  }

  return currentArray; // return the currentArray
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

const arr2 = [1, 2, 3];

console.log(arr2.myReverse());
console.log(arr2);
