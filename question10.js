/*10.	Create a JavaScript function to remove duplicate elements from an 
array without using any built-in methods.*/
const prompt = require('prompt-sync')();
function removeDuplicateNumber(array) {
    let arr=[];
    for (let index = 0; index < array.length; index++) {
        if (arr.indexOf(array[index]) === -1) {
            arr.push(array[index]);
        }
    }
    return arr;
}
let size=parseInt(prompt("Enter the size of the array"))
let arr=[]
for(index=0;index<=size-1;index++){
    let elements=parseInt(prompt("Enter element " + (index + 1) + ": "))
    arr.push(elements)
}
console.log(`The numbers are you written ${arr} `)
console.log( 'The numbers without duplicate value '+removeDuplicateNumber(arr));
