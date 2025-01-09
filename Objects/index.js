// const obj = {
//   a: 1,
//   z: 4,
//   b: 5,
// };
// console.log(obj);
// console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));
// for (const key in obj) {
//   const element = obj[key];
//   console.log(element);
// }
// let map = new Map();
// map.set("a", 1);
// map.set("z", 3);
// map.set("b", 0);
// map.forEach((element) => {
//   console.log(element);
// });
// console.log(map.keys(), map.values(), map.entries());

// console.log(map);
// console.log(map.size);
const myObject = {
  name: "John",
  age: 42,
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`Someone accessed property "${prop}"`);
    return target[prop];
  },
};

const proxiedObject = new Proxy(myObject, handler);

console.log(proxiedObject.name); // 'John'
// Someone accessed property "name"

console.log(proxiedObject.value); // 42
// Someone accessed property "value"
