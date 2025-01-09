const array = [1, 2, 3, 4, 5];

array.forEach((ele, index, array) => {
  console.log(ele, index, array);
});

Array.prototype.maheForEach = function (cb, s) {
  for (let index = 0; index < this.length; index++) {
    cb(this[index], index, this, s);
  }
};
// Consider the array [1, 2, 3, 4] and the callback function (ele) => { console.log(ele); }.
// When myForEach is called on this array:
// 	• On the first iteration (index = 0), cb(this[index]) becomes cb(1), so the callback is called with 1
// and logs 1 to the console.
// 	• On the second iteration (index = 1), cb(this[index]) becomes cb(2), so the callback is called with 2
// and logs 2 to the console.
// This continues for each element in the array.

array.maheForEach((ele, index, array) => {
  console.log(ele, index, array);
}, obj);
