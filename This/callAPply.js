"use strict";
console.log(this);

// If there is not object present
function gfFunction() {
  console.log(this);
}

gfFunction();
// window.gfFunction();

let obj = {
  name: "Mahe",
  age: 25,
  // When we call using Object. It points to the object
  func: function (a, b) {
    console.log(this, a, b);
  },
};

let obj1 = {
  name: "Mahe",
  age: 25,
  // When we call using Object. It points to the object
  func: function (a, b) {
    console.log(this, a, b);
  },
};
let obj2 = {
  name: "Julie",
  age: 25,
  // When we call using Object. It points to the object
  func: function (a, b) {
    console.log(this, a, b);
  },
};
obj.func.call(obj1, 1, 2);
obj.func.apply(obj1, [1, 2]);
const x = obj.func.bind(obj1, 1, 2);
obj.func.apply(obj2, [2, 2]);
x();
const gfRefFunction = obj.func;
