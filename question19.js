/*19.	Income tax is calculated as per the following table 
Annual Income	           Tax percentage
Up to 2.5 Lakhs 	         No Tax
Above 2.5 Lakhs to 5 Lakhs	 5%
Above 5 Lakhs to 10 Lakhs	 20%
Above 10 Lakhs to 50 Lakhs	 30%
Write a program to find out the income tax amount of a person.
a.	Program should accept annual income of a person
Output the amount of tax he has to pay
Eg 1:
Enter the annual income
495000
Income tax amount = 24750.00
Eg 2:
Enter the annual income
500000
Income tax amount = 25000.00

*/
const prompt = require('prompt-sync')();
const income = parseInt(prompt("Enter the annual income: "));

function calculateTax(income) {
    if (income < 250000) {
        return "No Tax";
    } else if (income <= 500000) {
        return (income * 0.05).toFixed(2); 
    } else if (income <= 1000000) {
        return (income * 0.2).toFixed(2); 
    } else {
        return (income * 0.5).toFixed(2); 
    }
}

console.log('Income tax amount = ' + calculateTax(income));
