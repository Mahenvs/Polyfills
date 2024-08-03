// The apply method in javascript is almost same as call except the 
// arguments are passed as an array in apply, whereas in call the arguments will be passed individually

// Function to calculate total price with an optional discount
function calculateTotalPrice(discount) {
    const totalPrice = this.price * this.quantity;
    const discountedPrice = totalPrice - (totalPrice * (discount || 0) / 100);
    console.log(`The total price for ${this.name} is $${discountedPrice.toFixed(2)}`);
}

const laptop = {
    name: "Laptop",
    price: 1200,
    quantity: 2
};
const smartphone = {
    name: "Mobile",
    price: 800,
    quantity: 5
};

// Using `apply` to calculate the total price for each product with and without discount

// Calculate total price for laptop without discount
calculateTotalPrice.apply(laptop); 
// Output: "The total price for Laptop is $2400.00"

// Calculate total price for smartphone with a 10% discount and passing the args as an array
calculateTotalPrice.apply(smartphone, [10]); 
//Output: "The total price for Smartphone is $3600.00"