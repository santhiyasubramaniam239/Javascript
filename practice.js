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
/*let a = ["HTML", "CSS", "JS"];
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
});*/
/* object methods */

/*let student = {
    name: "Martin",
    class: "12th",
    Grade: "A",

    studentDetails: function () {
        return this.name + " " + this.class
            + " " + this.Grade + " ";
    }
};
console.log(student.studentDetails());
const person2 = {firstName: "Anne",lastName: "Smith"};
Object.assign(student, person2);
let text = Object.entries(student);
console.log(text);
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];
const myObj = Object.fromEntries(fruits);
console.log(myObj.pears);
let keys = Object.keys(student);
console.log(keys);
let values = Object.values(student);
console.log(values);
const fruits1 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:550}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 300 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits1, myCallback);
console.log(result);*/

/* String Methods
let A = 'Welcome to my world';
let b = A.slice(14, 19);
console.log(b);
let c = A.substring(0, 7);
console.log(c);
let d = A.substr(11, 19);
console.log(d);
let e = A.replace("my", "new");
console.log(e);
let e1 = "Mind, Alpha, Alpha, Soul";
let e2 = e1.replaceAll("Alpha", "Space");
console.log(e2);
console.log(A.toUpperCase());
console.log(A.toLowerCase());
console.log(e.concat(A));
let f = "   Home   "
console.log(f.trim());
console.log(f.trimStart());
console.log(f.trimEnd());
let g = f.trim();
console.log(g.length);
console.log(g.padStart(10, "Sweet "));
console.log(g.padEnd(10, "Sweet "));
console.log(g.charAt(1));
console.log(g.charCodeAt(1));
let g1 = 'HTML-stands-for-HyperTextMarkupLanguage'
console.log(g1.split('-'));*/
/* Number methods
let x = 345;
console.log(x.toString());
let y =55.5567;
console.log(y.toExponential(0));
console.log(y.toFixed(0));
console.log(y.toPrecision(1));
console.log(y.valueOf());*/
const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



