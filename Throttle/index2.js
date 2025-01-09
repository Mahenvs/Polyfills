const throttle = (cb, delay) => {
  let timer = null;

  return (...args) => {
    console.log(timer);
    if (timer == null) {
      cb(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
const API = "https://api.github.com/users/mahesh";

async function fetchGitUser() {
  const data = fetch(API);
  console.log(data);
}

const throttledFn = throttle(fetchGitUser, 4000);

const btn = document.getElementById("sendButton");
btn.addEventListener("click", throttledFn);
