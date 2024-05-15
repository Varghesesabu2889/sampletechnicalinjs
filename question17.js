/*17.	 Write a JavaScript program that acts as a simple calculator. 
It should display a menu to the user with options for addition, subtraction, 
multiplication, and division. The program should then prompt the user to enter 
two numbers and perform the selected operation. Implement this using functions and 
a switch statement. */
const prompt = require('prompt-sync')();
function displayMenu() {
    console.log("Calculator Menu:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
}
function sum(a, b) {
    return ["+",a+b];
}
function difference(a, b) {
    return ["-",a - b];
}
function product(a, b) {
    return ["*",a * b];
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return ["/",(a / b).toFixed(2)];
}
function calculator() {
    displayMenu();
    const choice = parseInt(prompt("Enter your choice (1-4):"));
    
    if (isNaN(choice) || choice < 1 || choice > 4) {
        console.log("Invalid choice. Please enter a number between 1 and 4.");
        return;
    }

    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    switch (choice) {
        case 1:
            result = sum(num1, num2);
            break;
        case 2:
            result = difference(num1, num2);
            break;
        case 3:
            result = product(num1, num2);
            break;
        case 4:
            result = divide(num1, num2);
            break;
    }

    console.log(`${num1}${result[0]}${num2}=${result[1]}`);
}
calculator();
