const API = "https://api.github.com/users/mahenvs";

async function fetchGitUser() {
  const data = fetch(API);
  console.log(data);
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  fetchGitUser();
  setTimeout(() => {
    resolve("P2 Success");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetchGitUser();

    resolve("P3 Success");
  }, 1000);
});
const p4 = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject("P4 Fail");
  }, 3000);
});
// Success Case--> Same as Promise.all the success case, When all the promises are resolved, the time taken for the
// longest Promise will be considered and the array of values from the p1,p2,p3 will
// be returned. i.e., All the promises will start their execution simultaneously and wait
// for the longest promise to resolve before returning
// All promises start their execution nearly simultaneously
// and resolve independently, but Promise.all ensures the final action waits for the slowest one.
Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res);
// The following is output object
  //   [
//     {
//         "status": "fulfilled",
//         "value": "P1 Success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P2 Success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P3 Success"
//     }
// ]
});

// Fail Case: Waits for all the promises to be either resolved or rejected then returns an array of objects
Promise.allSettled([p1, p2, p3,p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err)); //To catch Errors
