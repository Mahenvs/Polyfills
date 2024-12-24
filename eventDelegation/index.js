document.querySelector("#products").addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName == "LI") {
    window.location.href = "" + e.target.id;
  } else {
    console.log("I am not li");
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log("I ma clicked", e.target.value, e.target.dataset.uppercase);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
