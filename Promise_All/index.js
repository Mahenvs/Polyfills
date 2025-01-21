export default function PromiseAll(promises) {
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
