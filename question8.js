/*8.	Create a program to find the factorial of a given number 
using recursion in JavaScript.*/

const prompt = require("prompt-sync")();
const userInput = parseInt(prompt("Enter Your Number: "));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(`Factorial of ${userInput} = `+factorial(userInput));