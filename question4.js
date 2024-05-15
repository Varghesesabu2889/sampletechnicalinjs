/*4.	Write a JavaScript program to convert temperature from Celsius to Fahrenheit.
The program should prompt the user to enter a temperature in Celsius.Then, it should
 convert the temperature to Fahrenheit using the formula: F=9/5c+32.Display the converted
  temperature in Fahrenheit on the console, rounded to two decimal places    */

const prompt=require('prompt-sync')()
function celsiusToFahrenheit() {
    const celsius=(prompt("Enter a temperature in Celsius: "))
let fahrenheit =0
fahrenheit=(((9/5)*celsius)+32).toFixed(2)
console.log(`${fahrenheit }°F is equivalent to ${celsius}°C`)
    }
    celsiusToFahrenheit()
