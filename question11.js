/*11.	 Write a function in JavaScript to check if a given 
string is a palindrome or not.*/
const prompt = require('prompt-sync')();

function isPalindrome(str) {
    const string = str.toLowerCase();
    
    return string === string.split('').reverse().join('');
}

const inputString = prompt("Enter a string:" );

console.log(isPalindrome(inputString) ? `"${inputString}" is a palindrome.` : `"${inputString}" is not a palindrome.`);
