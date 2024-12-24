const p = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

// Async function always returns a promise.
async function getData() {
  return "First async";
}
const data = getData();
console.log(data); // Promise {<fulfilled>: 'First async'}

data.then((res) => console.log(res)); //First async
// ----------------------------------------------------------

const timerPromise = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve("After 5 seconds");
  }, 5000);
});

// function printTimerPromise(){
//     timerPromise.then((res) => console.log(res))
//     console.log("I am printing before 5 seconds and I am not waiting for a promise");
// }
// printTimerPromise()
// The following is the order in which it outputs
// I am printing before 5 seconds and I am not waiting for a promise -> File: asyncAwait.js:23
// After 5 seconds -> File: asyncAwait.js:17

// Using async/await, lets try to print the above promise

async function firstAsync() {
  // JS Engine will wait for promise to be resolved
  const data = await timerPromise;
  //   The following lines waits for the above line(Promise) to resolve
  console.log("I wait for async await before printing");
  console.log(data);
}
// firstAsync();
// I wait for async await before printing ->asyncAwait.js:36
// After 5 seconds -> asyncAwait.js:37

// -------------------------------------------------------------
const timerPromise1 = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve("After 10 seconds");
    }, 10000);
  });
  const timerPromise2 = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve("After 5 seconds");
    }, 5000);
  });
  
async function secondAsync() {
    // Here, it will wait for timerPromise1 10 seconds and the 
    // next timerPromise2 also will waits the same time 

    const p1 = await timerPromise1;
    console.log("I wait for promise1");
    console.log(p1);

    const p2 = await timerPromise2;
    console.log(p2);
  }
  secondAsync();