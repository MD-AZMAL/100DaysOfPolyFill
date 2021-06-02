require("../IOODaysOfPolyFill")(16);

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// Vanilla of()
console.log("Vanilla implementation\n\n");

console.log(Array.of(1));
console.log(Array.of(1, 2, 3));
console.log(Array.of(undefined));

// My implementation of of()
Array.myOf = function (...args) {
  return args; // simply return the argument array
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

console.log(Array.myOf(1));
console.log(Array.myOf(1, 2, 3));
console.log(Array.myOf(undefined));
