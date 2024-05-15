/*13.	Can you describe how you would implement a binary search algorithm in
 JavaScript to efficiently find a specific element within a sorted array? 
 Please provide a step-by-step explanation of the algorithm and then demonstrate 
 how you would translate this into JavaScript code.
*/
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid; 
        } else if (midValue < target) {
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }

    return -1; 
}


const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetElement = 11;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
    console.log(`Element found at index ${resultIndex}`);
} else {
    console.log(`Element not found`);
}

