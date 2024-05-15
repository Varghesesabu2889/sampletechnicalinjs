/*14.	Create a JavaScript function to find the intersection of two arrays.*/
function intersection(arr1, arr2) {
    const result = arr1.filter(x => arr2.indexOf(x) !== -1);
     return result;
}
const array1 = [15, 26, 36, 52, 96];
const array2 = [15, 39, 52, 38];
const result = intersection(array1, array2);
console.log(result);