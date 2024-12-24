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
  func: function (params) {
    console.log(this);
  },
};
// obj.func();

// Called wrt window by passing reference
const gfRefFunction = obj.func;
// gfRefFunction();
gfRefFunction();
