/*Find largest number in each sub-array*/
let arr = [[1, 5, 13], [10, 2, 38], [44, 6]];
let result = arr.map(subArray => Math.max(...subArray));
console.log(result); 
/*Flatten the array*/
function flattenIterative(arr) {
  let result = [];
  let stack = [...arr]; // Copy input to a stack

  while (stack.length) {
    let next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next); // Push array elements back to stack
    } else {
      result.push(next);   // Add value to result
    }
  }

  return result.reverse(); // Reverse to fix order
}
const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenIterative(nested)); 
/* chunk an array into smaller array*/
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
let chunk = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(chunk);
/*Remove falsy values*/
const arr1 = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
const cleaned = arr1.filter(Boolean);
console.log(cleaned);
/*Remove duplicate values from an Array*/
const arr2 = [1, 2, 2, 3, 4, 4, 4, 5];
const unique = [...new Set(arr2)];
console.log(unique);
/*Find intersection of two arrays*/
const arr3 = [1, 2, 3, 4];
const arr4 = [3, 4, 5, 6];
const intersection = arr3.filter(value => arr4.includes(value));
console.log(intersection);
/*Sort an array without using sort*/
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr5 =bubbleSort([9, 11, 25, 7]);
console.log(arr5);
/*Rotate an array by N steps*/
/* right rotation*/
const arr6 = [1,2,3,4,5];
const n=2
const rotated = arr6.slice(-n).concat(arr6.slice(0, -n));
console.log(rotated);
/*left rotation*/
const rotated1 = arr6.slice(n).concat(arr6.slice(0, n));
console.log(rotated1);
/*Sum all numbers in a Range*/
function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
const arr7 =sumAll([4, 1]);
console.log(arr7);
/*Find missing number in sequence*/
function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
const arr8 = findMissing([1, 2, 3, 5]) ;
console.log(arr8);




