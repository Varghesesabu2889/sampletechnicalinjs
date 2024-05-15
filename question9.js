/*9.	Implement a JavaScript function to reverse a string without using 
the built-in reverse() method*/
const prompt = require("prompt-sync")();
const userInput = prompt("Enter a String: ");
function reverseString(str) {
    let reversedStr = '';
    for (let index = str.length + 1; index >= 0; index--) {
        reversedStr += str[index];
    }
    return reversedStr;
}

console.log(`Reverse of String"${userInput}" = `+reverseString(userInput));