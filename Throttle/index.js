function throttle(cb, delay) {
  let timer = null;
  return (...args) => {
    if (timer == null) {
      cb(...args);
      timer = setTimeout(() => {
        // The following line wont execute till the delay finishes
        timer = null;
      }, delay);
    }
  };
}

const API = "https://api.github.com/users/mahesh";

let count = 0;
setInterval(() => {
  count++;
  document.getElementById("showTime").innerText = count;
}, 1000);

async function fetchGitUser() {
  const data = fetch(API);
  console.log(data);
}

const sendButton = document.getElementById("sendButton");

const throttledFetchUser = throttle(fetchGitUser, 3000);
sendButton.addEventListener("click", throttledFetchUser);
