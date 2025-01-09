// "use strict";
const API = "https://api.github.com/users/";

async function fetchGitUser(name) {
  const existingSpan = document.querySelector("span");

  if (existingSpan) {
    existingSpan.remove();
  }

  const data = await fetch(API + name);
  const res = await data.json();
  console.log(res);
  const a = document.createElement("span");
  a.textContent = JSON.stringify(res, null, 2);
  document.body.appendChild(a);
}

function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, ...args);
    }, wait);
  };
}

function sayHello() {
  console.log("My name is", this.name);
}

function getMyGitData(arg1) {
  console.log(arg1);

  console.log(document.getElementById("name").value);

  fetchGitUser(document.getElementById("name").value);
}

const debouncedFn = debounce(getMyGitData, 1000);

// const obj = {
//   name: "mahe",
//   speak: debounce(sayHello),
// };

// obj.speak();
