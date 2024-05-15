// 16.	Implement a JavaScript function to calculate the median of an array of numbers
function median(arr) {
    const mid = Math.floor(arr.length / 2);
    const sortedArr = arr.sort((a, b) => a - b);
  
    if (arr.length % 2 === 0) {
       return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
       return sortedArr[mid];
    }
 }
let arr=[];
const prompt = require('prompt-sync')();
let size=parseInt(prompt("Enter the size of an array"))
for(let index=0;index<=size-1;index++){
    let elements=parseInt(prompt("Enter element " + (index + 1) + ": "))
    arr.push(elements)
}
console.log("median of an array of numbers"+ median(arr));

