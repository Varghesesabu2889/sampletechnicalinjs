/*2.	Write a JavaScript function that takes an array of numbers as
 input and returns the sum of all the numbers in the array.*/
const prompt = require('prompt-sync')();
function sumOfArray() {
  let arr = [];
  let size = parseInt(prompt("Enter the size of the array: "));
  
  for (let index = 0; index < size; index++) {
    let element = parseInt(prompt("Enter element " + (index + 1) + ": "));
    arr.push(element);
  }
  
  const sum = (arr) => {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    return sum;
  }

  console.log(`Sum of the array elements: ${sum(arr)}`);
}

sumOfArray();
