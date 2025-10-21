// 1. Take a name and make it greet like "Hello, JOHN!"
let name = "John";
console.log(`Hello, ${name.toUpperCase()}!`);

// 2. Get the length of the string "JavaScript"
let str = "JavaScript";
console.log(str.length);

// 3. Check if "apple" exists in "I like apple pie"
let sentence = "I like apple pie";
console.log(sentence.includes("apple"));

// 4. Find where the word "code" starts in "Learn to code every day"
let phrase = "Learn to code every day";
console.log(phrase.indexOf("code"));

// 5. Replace "bad" with "good" in "That is a bad idea"
let idea = "That is a bad idea";
console.log(idea.replace("bad", "good"));

// 6. Remove extra spaces from "   JavaScript   "
let messyString = "   JavaScript   ";
console.log(messyString.trim());

// 7. Reverse the string "hello"
let hello = "hello";
console.log(hello.split("").reverse().join(""));

// 8. Convert "hello world" → "Hello World"
let phraseToCapitalize = "hello world";
let capitalizedPhrase = phraseToCapitalize.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizedPhrase);

// 9. Convert "john.doe@gmail.com" → "j***@gmail.com"
let email = "john.doe@gmail.com";
console.log(`${email[0]}***@${email.split("@")[1]}`);

// 10. Count how many times 'a' appears in "banana"
let fruit = "banana";
let countA = fruit.split("a").length - 1;
console.log(countA);

// 11. From "https://www.google.com" get "google.com"
let url = "https://www.google.com";
console.log(url.replace("https://www.", ""));

// 12. Check if "JavaScript" starts with "Java" and ends with "Script"
let language = "JavaScript";
console.log(language.startsWith("Java") && language.endsWith("Script"));

// 13. Count how many times each word appears in "I love JavaScript because JavaScript is awesome"
let text = "I love JavaScript because JavaScript is awesome is is";
let wordCounts = {};
text.split(" ").forEach(word => {
    word = word.toLowerCase();
    wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1;
});
console.log(wordCounts);

// 14. Return the longest word in a sentence
let sentenceForLongest = "I love JavaScript because JavaScripta is awesome";
let longestWord = sentenceForLongest.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");
console.log(longestWord);

// 15. Convert "Learn JavaScript in 2025!" → "learn-javascript-in-2025"
let title = "Learn JavaScript in 2025!";
let txt = title.toLowerCase().replaceAll(" ", "-").replace("!", "");
console.log(txt);