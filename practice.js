/*1. Reverse a string
let word = "Hello World";
console.log(word.split('').reverse().join(''));*/
/*2. palindrome string
let word1 = "HellolleH";
   console.log ( word1 === word1.split("").reverse().join(""));*/
/*3.  Vowel count in a string
const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const s = "Welcome home";
console.log(cVowels(s));*/
/* 4. Capitalize first letter of each word
let text = "hello world";
let capitalized = text.split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
console.log(capitalized)*/
/* Control Statements
const num = 7;

if (num > 0) {
    console.log("The number is positive.");
};*/
/*let num = -10;

if (num > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");*/
/*let number = 5;

switch (number) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Number is one.");
        break;
    case 5:
        console.log("Number is five.");
        break;
    default:
        console.log("Number is greater than 2.");
};
let num = -10;

let result = num >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}.`);
let temp = 11;

if (temp >= 30) {
    console.log("It's hot outside.");
} else if (temp >= 20) {
    console.log("It's warm outside.");
} else if (temp >= 10) {
    console.log("It's cool outside.");
} else {
    console.log("It's cold outside.");
}*/
/*for (let i = 0; i <= 3; i++) {
    console.log("Count:", i);
}*/
/*let i = 1;
while (i < 3) {
    console.log("Number:", i);
    i++;
}*/
/*const obj = { name: "Kavi", age: 22 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}*/
/*let a = ["mon", "tue", "wed", "thurs", "fri"];
for (let val of a) {
    console.log(val);
}*/
/* Array Methods*/
let a = ["HTML", "CSS", "JS"];
console.log(a.length);
let s = a.toString();
console.log(s);
console.log(a.join('|'));
console.log(delete a[1]); 
console.log(a);
let a1=[21, 22,23]
console.log(a.concat(a1));
const a2 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a3 = a2.flat(Infinity);
console.log(a3);
a1.push(70, 80, 90);
a1.unshift(10, 20);
console.log(a1);
a1.pop();
console.log(a1);
a1.shift();
console.log(a1);
a1.splice(1, 3);
a1.splice(1, 0, 3, 4, 5);
console.log(a1);
console.log(a1.slice(1, 4));
let res = a1.some((val) => val > 60);
console.log(res);
function myFunction(num) {
  return num * 10;
}
console.log(a1.map(myFunction));
let a4 = a1.filter((num) => num > 30)
console.log(a4);

function myFunc(total, num) {
  return total - num;
}
console.log(a4.reduce(myFunc));
console.log(a4.reverse());
const res1 = a4.values();
for (const value of res1) {
    console.log(value);
}
let mat = [];
let rows = 3;
let cols = 4;
let val = 10;

for (let i = 0; i < rows; i++) {
    mat[i] = [];
    for (let j = 0; j < cols; j++) {
        mat[i][j] = val++;
    }
}

console.log(mat);
console.log(mat[0][1]);
mat[1][2] = 100;
console.log(mat);
a.forEach(function myfunc(x) {
    console.log(x);
});
