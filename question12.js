/*12.Write a program to sort an array in descending order
a.	Program should accept and array, sort the array values in 
descending order and display it
Eg: Output: Enter the size of an array
Input: 5
Output: Enter the values of array
Input: 20, 10, 50, 30, 40
Output: Sorted array:
50, 40, 30, 20, 10


*/

const prompt = require('prompt-sync')();

function sortDescendingArray() {
  let arr = [];
  let size = parseInt(prompt("Enter the size of the array: "));
  
  for (let index = 0; index < size; index++) {
    let element = parseInt(prompt("Enter element " + (index + 1) + ": "));
    arr.push(element);
  }
  
  let sortedArray = arr.sort((a, b) => b - a);
  console.log('Sorted array:', sortedArray);
}

sortDescendingArray();
