// By default the following follows the event Bubbling if we don't pass any third parameter in addEventListener
// document.querySelector("#grandParent").addEventListener("click", () => {
//   console.log("I'm GrandPa");
// });
// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("I'm Parent");
// });
// document.querySelector("#child").addEventListener("click", () => {
//   console.log("I'm Child");
// });

// By default the following follows the event Capturing if we pass true as 3rd parameter in addEventListener

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("I'm GrandPa");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("I'm Parent");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("I'm Child");
  },
  true
);

// The following method needs to be used to stop the bubbling or capturing to reduce expensive operations
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("I'm Child");
  },
  true
);
