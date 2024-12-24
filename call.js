// The call method in javascript lets users reuse this function on different objects
// By using the call method in javascript, we can call a function
//by explicitly setting the context of the "this" in the function and its arguments(optional)

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

// Using `call` to calculate the total price for each product with and without discount

// Calculate total price for laptop without discount
calculateTotalPrice.call(laptop); 
// Output: "The total price for Laptop is $2400.00"

// Calculate total price for smartphone with a 10% discount
calculateTotalPrice.call(smartphone, 10); 
//Output: "The total price for Smartphone is $3600.00"