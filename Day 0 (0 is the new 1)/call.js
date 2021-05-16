require('../IOODaysOfPolyFill')(0);

// call() in js is used to call a function for different object
// the object passed can be used using the 'this' keyword

const greet = function () {
  return `Welcome to 100DaysOfPolyFill ${this.name}`;
};

const greetWithDayNumber = function(dayNumber) {
    console.log(`Welcome to 100DaysOfPolyFill ${this.name}, today is day ${dayNumber}`);
}

const dev1 = {
  name: "Azmal",
};

const dev2 = {
  name: "Jasmin",
};

// Vanila call()
console.log('Vanila implementation\n\n');

console.log(greet.call(dev1));
console.log(greet.call(dev2));
console.log('\n\n');
greetWithDayNumber.call(dev1, 0);
greetWithDayNumber.call(dev2, 1);



// My inplementation for call()

Function.prototype.myCall = function (context, ...args) {
    // to make sure the current executing function uses the object as a context for this it must be 
    // declared inside the object itself

    // uncomment the below console.log to check what the 'this' inside this method means
    // console.log(this);

    // creating a dummy function locally and assinging 'this' which is current executing function to it
    // changes are made locally so the original object and function are not affected

    context.currentFunction = this;

    // return the result of dummy funcition
    
    return context.currentFunction(...args);
};

console.log('\n\n----------------');
console.log('Custom implementation\n\n');

console.log(greet.myCall(dev1));
console.log(greet.myCall(dev2));
console.log('\n\n');
greetWithDayNumber.myCall(dev1, 0);
greetWithDayNumber.myCall(dev2, 1);
