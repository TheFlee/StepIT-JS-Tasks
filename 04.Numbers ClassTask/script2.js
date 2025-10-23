// Example data
const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Headphones", price: 150, category: "Electronics" },
  { id: 3, name: "Shoes", price: 90, category: "Fashion" },
  { id: 4, name: "T-shirt", price: 25, category: "Fashion" }
];

// 1. Create an empty array called 'cart'
let cart = [];

// 2. Create a function addToCart(productId, quantity)
//    that adds the selected product to the cart with its quantity and total price
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = {
            productId: product.id,
            name: product.name,
            category: product.category,
            quantity: quantity,
            totalPrice: product.price * quantity
        };
        cart.push(cartItem);
    }
}

// 3. Create a function removeFromCart(productId)
//    that removes a product from the cart by its id

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
}

// 4. Create a function getCartTotal()
//    that returns the total price of all items in the cart
function getCartTotal() {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
}
console.log(getCartTotal());

// 5. Create a function filterByCategory(category)
//    that returns all products that belong to the given category
function filterByCategory(category) {
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

// 6. Create a function searchProduct(keyword)
//    that returns all products whose names include the given keyword (case-insensitive)
function searchProduct(keyword) {
    return products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
}

// 7. Add a few items to the cart using your functions
addToCart(4, 3);
addToCart(2, 1);
addToCart(1, 2);

// 8. Remove one item from the cart
removeFromCart(2);

// 9. Log the cart contents
console.log(cart);

// 10. Log the total cart price
console.log(getCartTotal());

// 11. Log products filtered by category
console.log(filterByCategory("Electronics"));

// 12. Log the result of a product search
console.log(searchProduct("lap"));
console.log(searchProduct("sh"));