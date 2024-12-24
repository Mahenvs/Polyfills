const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    resolve("P2 Success");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {

    resolve("P3 Success");
  }, 1000);
});
const p4 = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject("P4 Fail");
  }, 500);
});
// Success Case--> It returns the value which will be either resolved or rejected
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res); //Output: P3 Success
});

// Fail Case: It returns the value which will be either resolved or rejected
Promise.race([p1, p2, p3,p4])
  .then((res) => {
    console.log(res);
    // Output : P4 Fail
  })
  .catch((err) => console.log(err)); //To catch Errors
