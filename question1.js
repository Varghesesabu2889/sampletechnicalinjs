/* 1.	Write a JavaScript program that prompts the user to enter their age and then 
 displays a message on the console indicating whether they are old enough to vote 
 (consider the legal voting age as 18). */
const prompt = require('prompt-sync')();
const age = parseInt(prompt("Enter Your Age: "));
const message = age <= 0 || age > 100 ? "Check the age you entered properly" :
 age >= 18 ? `You are  eligible to vote because ${age} is above 18.` :
  `You are not eligible to vote because ${age} is below 18.`;
console.log(message);
