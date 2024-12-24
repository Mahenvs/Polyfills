input = {
  A: 1,
  B: {
    a: 2,
    c: {
      aa: 3,
    },
  },
  C: {
    a: 5,
  },
};
function deepFlatten(obj, prefix = "") {
  let result = {};
  for (let key in obj) {
    let val = obj[key];
    let newKey = prefix === "" ? key : prefix + "." + key;
    if (val !== null && typeof val === "object") {
      let recursiveOutput = deepFlatten(val, newKey);
      result = { ...result, ...recursiveOutput };
    } else {
      result[newKey] = val;
    }
    console.log(result);
  }
  console.log(result);

  return result;
}
const output = deepFlatten(input);
