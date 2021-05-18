require("../IOODaysOfPolyFill")(2);

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const addToNumber = function (number) {
  return this.num + number;
};

const numberObj1 = {
  num: 10,
};

const numberObj2 = {
  num: 5,
};

// Vanila apply()
console.log("Vanila implementation\n\n");

const addToNumberWithBind1 = addToNumber.bind(numberObj1);
const addToNumberWithBind2 = addToNumber.bind(numberObj2);

console.log(addToNumberWithBind1(5));
console.log(addToNumberWithBind2(7));

// My implementation of bind
Function.prototype.myBind = function (context, ...args) {
  // we store the context of the current executing function to a variable
  const fnContext = this;

  // Instead of running the function we return a function that is capable of running later
  // but in order to make the context of this to be the object we want
  // we use appl() methond on the fnContext variable to maintaint the context of this

  return function (...funArgs) {
    // here the current function is being executed with given object as a context and the required result is returned
    return fnContext.apply(context, [...args, ...funArgs]);
  };
};

console.log("\n\n----------------");
console.log("Custom implementation\n\n");

const addToNumberWithCustomBind1 = addToNumber.myBind(numberObj1);
const addToNumberWithCustomBind2 = addToNumber.myBind(numberObj2);

console.log(addToNumberWithCustomBind1(5));
console.log(addToNumberWithCustomBind2(7));
