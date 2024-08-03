// The bind method in javascript is similar to call, but
// In call, the function will be invoked whenever the method is applied,
// in bind, the function will be created but it can be invoked later whenever we want to,
// i.e., we will prepare a function initially and
// later at any point of time we can make use of the function

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

// Using `bind` to calculate the total price for each product with and without discount

calculateTotalPrice.bind(laptop); 
// Output: 
calculateTotalPrice.bind(smartphone, [10]); 
//Output: 

// Calculate total price for laptop without discount
const laptopPrice = calculateTotalPrice.bind(laptop); 
laptopPrice() // Output: "The total price for Laptop is $2400.00"

// Calculate total price for smartphone with a 10% discount and passing the args as an array
const mobilePrice = calculateTotalPrice.bind(smartphone, [10]); 
mobilePrice() //Output: "The total price for Smartphone is $3600.00"