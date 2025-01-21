function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length;
    const arr = new Array(len);
    let unresolved = len;
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        arr[index] = res;
        unresolved -= 1;
        if (unresolved === 0) {
          resolve(arr);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

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
  }, 3000);
});
// const p4 = new Promise((resolve, reject) => {
//   fetchGitUser();
//   setTimeout(() => {
//     reject("P4 Fail");
//   }, 1000);
// });
// Success Case: When all the promises are resolved, the time taken for the
// longest Promise will be considered and the array of values from the p1,p2,p3 will
// be returned. i.e., All the promises will start their execution simultaneously and wait
// for the longest promise to resolve before returning
// All promises start their execution nearly simultaneously
// and resolve independently, but Promise.all ensures the final action waits for the slowest one.

PromiseAll([p1, p2, p3]).then((res) => {
  console.log(res);
});

// Fail Case: As soon as any of the promise encounters an error, entire promise will stop their execution and the
// error will be thrown
// PromiseAll([p1, p2, p3, p4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err)); //To catch Errors
