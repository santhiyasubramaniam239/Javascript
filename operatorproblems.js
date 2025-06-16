//Problem:1
let a = 10;
let b = 3;
console.log("Addition Result:", a + b);
console.log("Subtraction Result:", a - b);
console.log("Multiplication Result:", a * b);
console.log("Division Result:", a / b);
console.log("Remainder Result:", a % b);

//Problem:2
let x = 5;
let y = "5";
console.log("x==y:", x == y);
console.log("x===y:", x === y);

//Problem:3
let age = 18;
const citizen = true;
if ((age >= 18) && (citizen)) {
    console.log("Person is eligible to vote");
}
else {
    console.log("Person is not eligible to vote");
}

//Problem:4
let result = 10 + 5 * 2 - 8 / 4;// operator precedence =>/ works first and is followed by *+-, 10+10-2=>20-2=>18
console.log(result);

//Problem:5
let score = 78;
let final = (score >= 60) ? (score >= 75) ? (score >= 90) ? "Grade:A" : "Grade:B" : "Grade:C" : "Grade:F";
console.log(final);

