// === Variables ===
// Hello World
console.log('Hello World');

// Reassign a value to a variable
{let num = 1;
num = 2;
console.log(num);}

// Assign a value to a variable
{let num;
num = 2;
console.log(num);}

// Assign the value of another variable
{let numOne = 5;
let numTwo = numOne;
console.log(numTwo);}

// Create the missing variable
{let numOne = 5;
let numTwo = numOne;
console.log(numTwo);}

// Accessing a variable (1)
{const num = 5;
console.log(num);}

// Accessing a variable (2)
{const num = 5;
console.log(num);}

// Declare a variable and assign a number
{const num = 5;
console.log('The value of num is: ' + num);}

// Reassign a value to a variable (2)
{let num = 1;
num = 2;
console.log(num);}

// Uncomment to Assign a Number
{const x = 7;
console.log(x);}

// Time to Uncomment
{const x = 100;
console.log(x);}

// Time to comment
{let x = 100;
// x = 0
console.log(x);}

// === Booleans ===
// Assign boolean to a variable
{let isTrue;
isTrue = true;
console.log(isTrue);}

// === Operators ===
// Comparison operators - Equal
{const numOne = 5;
const numTwo = 5;
console.log(numOne == numTwo);}

// Comparison operators - Not Equal
{const numOne = 5;
const numTwo = 6;
console.log(numOne != numTwo);}

// === Strings ===
// Create a JavaScript string
{const text = 'hello world';
console.log('The value of text is: ' + text);}

// Declare a String Variable
{const greeting = 'Hello world';
console.log(greeting);}

// Compare String with Different Quotes
{let str1 = 'hello';
let str2 = "hello";
const areEqual = str1 === str2;
console.log(areEqual);}

// === Conditionals ===
// if statement - satisfy condition
{let num = 0;
if (1 < 2) {
   num = 1;
}
console.log(num === 1);}

// === Functions I ===
// Function declaration
{function func() {
   return 'hello world';
};
const result = func();
console.log(result);}