function a() {
  console.log("Function statement");
}
a();

var exp = function () {
  console.log("Function expression");
};
exp();

// Named Function Expression
var namedExp = function xyz() {
  console.log("Named Function expression");
  console.log(xyz); //This prints the function
  // xyz()//This creates an infinite loop
};
// namedExp()
// The following gives an referenceError: xyz is not defined
// xyz()

// First class functions: The ability to use functions as argument
// or to return the function from another function

var f = function (param1) {
  return param1;
};
console.log(f(function () {}));
// console.log(f());

// Arrow Functions are introduced in ES6