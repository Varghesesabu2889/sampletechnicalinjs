/*7.	Write a JavaScript function to check if a given number is prime or not.*/


const prompt = require("prompt-sync")();
const userInput = prompt("Enter Your Number: ");
function prime(number) {
    if (number <= 1)
         return false; 
    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            return false; 
        }
    }
    return true;
}
console.log(`${userInput} is${prime(userInput) ? '' : ' not'} a prime number.`);
