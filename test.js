function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y; // A closure along with lexical scope is returned
}
var z = x();
console.log(z);
z(); //Prints 7
