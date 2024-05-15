/*6.	Write a JavaScript program that uses a switch case to accept an input number from
 the user and output the corresponding month.The program should prompt the user to enter
  a number representing a month (1 for January, 2 for February, etc.).Then, using a switch 
  case, it should output the name of the month.If the user enters any other number,
   the program should display "Invalid Entry".
*/

const prompt = require("prompt-sync")();
const NumberOfMonth = parseInt(prompt("Enter a number representing a month (1 for January, 2 for February, etc.)"));
switch (NumberOfMonth) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    month = "Invalid Entry";
    break;
}
console.log(month=="Invalid Entry"?"Invalid Entry":`According to ${NumberOfMonth}:the month is ${month}`);
