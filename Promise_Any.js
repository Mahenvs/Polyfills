const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Success");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Success");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Success");
  }, 1000);
});
const p4 = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject("P4 Fail");
  }, 3000);
});
// Success Case--> This method waits for the first settled or resolved Promise and will return the value of it
// Promise.any([p1, p2, p3]).then((res) => {
//   console.log(res);
//   //Output valu:  P3 Success
// });

// Fail Case: It ignores if any of the promise fails or rejected until any promise is resolved.
// If all the promises are rejected, returns an array of error values
Promise.any([p1, p2, p3,p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err.errors)); //To catch Errors
// If all the promises are rejected, the output will be as following: 
// AggregateError: All promises were rejected