//Problem:1
let arr = [34, 67, 57, 83, 42];
for (let num of arr) {
    console.log(num);
}

//Problem:2
let fruits = ["apple", "banana", "pineapple", "mango"];
console.log("Length of fruits array: ", fruits.length);
let last = 0;
last = fruits.length - 1;
console.log("Last element of an array is : ", fruits[last]);

//Problem:3
function max(arr3 = []) {
    let i = 0;
    let result2 = [];

    while (i < arr3.length - 1) {
        if (arr3[i] > arr3[i + 1]) {
            result2.push(arr3[i]);
        } else {
            result2.push(arr3[i + 1]);
        }
        i += 2;
    }

    if (arr3.length % 2 !== 0) {
        result2.push(arr3[arr3.length - 1]);
    }

    if (result2.length === 1) {
        console.log("Max element is:", result2[0]);
        return result2[0];
    } else {
        return max(result2);
    }
}

max([56, 97, 53, 93, 33]);

//Problem:4
let arr6 = [34, 67, 57, 83, 42];
let arr7 = arr6.filter(x => x % 2 === 0);
console.log("Even number count in array is : ", arr7.length);

//Problem:5
function duplicate(arr3 = []) {
    let i = 0;
    let result3 = [];

    while (i < arr3.length) {
        if (!result3.includes(arr3[i])) {
            result3.push(arr3[i]);
        }
        i++;
    }

    // Base case: stop recursion if array is already unique
    if (result3.length === arr3.length) {
        return result3;
    } else {
        return duplicate(result3); // recursive step
    }
}

let arr8 = duplicate([34, 57, 57, 83, 34]);
console.log(arr8); // [34, 57, 83]

