require("../IOODaysOfPolyFill")(1);

// apply() in js is similar to call method but takes arguments as an array

const getSumWithMessage = function (n1, n2, n3) {
  return `${this.message}, sum is : ${n1 + n2 + n3}`;
};

const messageObject1 = {
  message: "100 Days of Polyfill",
};

const messageObject2 = {
    message: "Day 1",
};

// Vanila apply()
console.log('Vanila implementation\n\n');

console.log(getSumWithMessage.apply(messageObject1,[1,2,3]));
console.log(getSumWithMessage.apply(messageObject2,[4,5,6]));

// My implementation of apply
Function.prototype.myApply = function(context, args) {
    // this is exactly similar to call(), the only change is now this function accepts an array as argument

    context.currentFunction = this;

    return context.currentFunction(...args);    
}

console.log('\n\n----------------');
console.log('Custom implementation\n\n');

console.log(getSumWithMessage.myApply(messageObject1,[1,2,3]));
console.log(getSumWithMessage.myApply(messageObject2,[4,5,6]));