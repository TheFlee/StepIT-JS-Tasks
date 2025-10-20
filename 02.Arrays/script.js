// CUSTOMER DATA
const orders = [
  { id: 1, customer: "Alice", items: ["laptop", "mouse"], total: 1200, status: "pending" },
  { id: 2, customer: "Bob", items: ["phone"], total: 800, status: "completed" },
  { id: 3, customer: "Charlie", items: ["keyboard", "mouse"], total: 150, status: "pending" },
  { id: 4, customer: "David", items: ["monitor"], total: 300, status: "completed" },
  { id: 5, customer: "Eve", items: ["tablet"], total: 400, status: "pending" },
];

// TASKS

// BASIC OPERATIONS
// 1. Add a new order:
orders.push({ id: 6, customer: "Frank", items: ["headphones"], total: 200, status: "pending" });

// 2. The order with ID 3 got canceled.
// Use splice() or filter() to remove it from the list.
const newOrders = orders.filter(order => order.id !== 3);
console.log("Orders after removing canceled order:", newOrders);

// 3. Display the total number of orders.
console.log("Total number of orders:", orders.length);

// SEARCHING AND FILTERING
// 1. Find the first completed order.
const firstCompletedOrder = orders.find(order => order.status === "completed");
console.log("First completed order:", firstCompletedOrder);

// 2. Create a new array "pendingOrders" that contains only orders with status "pending".
const pendingOrders = orders.filter(order => order.status === "pending");
console.log("Pending orders:", pendingOrders);

// 3. Create a list of customers who bought a "mouse".
// → Use filter() + includes() on items.
const customersWithMouse = orders.filter(order => order.items.includes("mouse"))
console.log("Customers who bought a mouse:", customersWithMouse);

// CALCULATIONS
// 1. Get the total sales amount (sum of all totals).
let getSum = (total, num) => total + num;

const totalSales = orders.map(order => order.total).reduce(getSum, 0);
console.log("Total sales amount:", totalSales);

// 2. Check if all orders are completed.
const allCompleted = orders.every(order => order.status === "completed");
console.log("Are all orders completed?", allCompleted);

// TRANSFORMING AND REPORTING
// 1. Create a new array "orderSummaries" that looks like:
// ["Alice ordered 2 items ($1200)", "Bob ordered 1 item ($800)", ...]
// → Use map()
const orderSummaries = orders.map(order => `${order.customer} ordered ${order.items.length} item(s) ($${order.total})`);
console.log("Order summaries:", orderSummaries);

// 2. Sort all orders by total amount (highest to lowest).
const sortedOrders = orders.slice().sort((a, b) => b.total - a.total);
console.log("Orders sorted by total amount:", sortedOrders);

// 3. Create a string of all customer names separated by commas.
const customerNames = orders.map(order => order.customer).join(", ");
console.log("Customer names:", customerNames);

// REAL LIFE USE
// 1. You received a refund for all orders under $200.
// Use filter() to find them and forEach() to log:
// "Refund issued for <customer>".
const refundOrders = orders.filter(order => order.total < 200);
refundOrders.forEach(order => {
  console.log(`Refund issued for ${order.customer}`);
});