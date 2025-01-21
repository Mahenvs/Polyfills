async function fetchRetry(fn) {
  return async function (...args) {
    let retryCnt = 0;
    let res;
    while (retryCnt < 3) {
      res = await fn(...args);
      console.log(res);

      if (res !== "error") {
        console.log("8");
        return res;
      }
      retryCnt += 1;
    }
    return "error final tried 3 times"; // After 3 retries, return failure
  };
}
async function makeCall(url) {
  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      return "error";
    }
    return await res.json();
  } catch (error) {
    return "error";
  }
}
async function execute() {
  const x = await fetchRetry(makeCall); // This is now inside an async function
  const result = await x("https://api.github.com/users/mahenvss");
  console.log(result); // Logs the result (successful or final error after retries)
}

execute();
