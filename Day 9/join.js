require("../IOODaysOfPolyFill")(9);

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const arr = [1, 2, "Hello", 5, () => ({ foo: "bar" })];

// Vanilla join()
console.log("Vanilla implementation\n\n");

console.log(arr.join());
console.log(arr.join("@"));

// My implementation of join()
Array.prototype.myJoin = function (sep) {
  // store the current reference of the array to a variable
  const currentArray = this;

  // to store the resultant string
  let joinedString = "";

  let i; // looping variable

  sep = sep ? sep : ","; // if separator is not provided then set it to comma by default

  // keep concatenating each element to the joinedString with the separator until the last element
  for (i = 0; i < currentArray.length - 1; i++)
    joinedString += `${currentArray[i]}${sep}`;

  joinedString += currentArray[i]; // join the last element without spearator

  return joinedString;
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(arr.myJoin());
console.log(arr.myJoin("@"));
