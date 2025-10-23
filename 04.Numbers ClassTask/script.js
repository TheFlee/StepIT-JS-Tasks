// 1. Create a variable with a decimal number and round it to the nearest integer using a suitable method.
let num = 12.7;
let rounded = Math.round(num);
console.log(rounded);

// 2. Generate a random number between 0 and 10 (inclusive).
let randomNum = Math.floor(Math.random() * 11);
console.log(randomNum);

// 3. Convert a string "42.9" into a number and round it down.
let str1 = "42.9";
let roundedDown = Math.floor(parseInt(str1));
console.log(roundedDown);

// 4. Convert a string "99.5" into a number and round it up.
let str2 = "99.5";
let roundedUp = Math.ceil(parseFloat(str2));
console.log(roundedUp);

// 5. Format a number (like 1234.56789) to have only 2 decimal places.
let num2 = 1234.56789;
let formatted = num2.toFixed(2);
console.log(formatted);

// 6. Generate a random integer between 1 and 100.
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

// 7. Convert a floating number 12.34567 to a string with 3 digits after the decimal point.
let num3 = 12.34567;
let strFixed = num3.toFixed(3);
console.log(strFixed);

// 8. Parse the string "100px" and get only the numeric part as a number.
let str3 = "100px";
let numericValue = parseInt(str3);
console.log(numericValue);

// 9. Check if "Hello" can be converted to a valid number.
let str4 = "Hello";
let isValidNumber = !isNaN(str4);
console.log(isValidNumber);

// 10. Generate 5 random numbers between 0 and 1 and store them in an array.
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.random());
}
console.log(randomArray);
