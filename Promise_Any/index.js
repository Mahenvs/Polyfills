export default function promiseAny(numOfPromises) {
  return new Promise((resolve, reject) => {
    if (numOfPromises.length === 0) {
      //   return new AggregateError([]);
      reject();
    }

    let pendingPromises = numOfPromises.length;
    const customError = new Array(numOfPromises.length);

    numOfPromises.forEach(async (singlePromise, index) => {
      try {
        const response = await singlePromise;
        resolve(response);
      } catch (err) {
        pendingPromises--;
        customError[index] = err;

        if (pendingPromises === 0) {
          reject(new AggregateError(customError));
        }
      }
    });
  });
}
