require("../IOODaysOfPolyFill")(19);

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// Vanilla pop()
console.log("Vanilla implementation\n\n");

let arr = [1, 2, 3, 4, 5];

console.log(arr.pop());
console.log(arr);
console.log(arr.length);

// My implementation of pop()
Array.prototype.myPop = function () {
  // store current reference of the array
  const currentArray = this;

  // store last element for returning
  const lastItem = currentArray[currentArray.length - 1];

  // delete the last element and reduce the array length
  delete currentArray[currentArray.length-- - 1];

  // return the item
  return lastItem;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

arr = [1, 2, 3, 4, 5];

console.log(arr.myPop());
console.log(arr);
console.log(arr.length);
