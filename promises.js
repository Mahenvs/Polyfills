// Less Readability
// Code Maintenance

// Callback Hell
// Inversion Control
// api.addToCart(cart, function (cartId) {
//   api.makePayment(cartId, function () {
//     api.getOrderSummary();
//   });
// });

// const url = "https://api.github.com/users/mahenvs";
// const user1 = fetch(url); //Promise<Pending>
// user1
// .then((res) => {
//     console.log("First then ",res," ");
//     return res.json();
//   })
//   .then((data) => console.log(data));

// Creating a Promise

const cartData = [];

const confirmOrder = (cartData) => {
  const promise = new Promise((resolve, reject) => {
    if (isDataValid(cartData)) {
      resolve({
        orderId: 1,
        msg: "Order Confirmed",
      });
    } else {
      const err = new Error("Add Items");
      reject(err);
    }
  });
  return promise;
};

function isDataValid(cartData) {
  return cartData.length > 0;
}
const promise = confirmOrder(cartData);
// console.log(promise);

// Promise Chaining
promise.then(function (data) {
    return data
  })
  .then((res) => resp)
  .then((res) => console.log(res))
  .catch((err) => {
    console.log("is not valid",err.message);
  });
