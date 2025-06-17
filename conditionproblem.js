//Problem:1
let a = 11;
if (a % 2 === 0) {
    console.log("Number " + a + " is even number.");
}
else {
    console.log("Number " + a + " is odd number.");
}

//Problem:2
let b = -13;
if (b > 0) {
    console.log("Number " + b + " is positive number.");
} else if (b < 0) {
    console.log("Number " + b + " is negative number.");
} else {
    console.log("Number is zero.");
}

//Problem:3
let c = 2008;
if ((c % 4 === 0) && (c % 100 != 0)) {
    console.log(c + " is a leap year.");
} else {
    console.log(c + " is not a leap year.");
}

//Problem:4
let d = 35;
let e = 26;
let f = 87;
if ((d > e) && (d > f)) {
    console.log("Number " + d + " is largest among three numbers");
} else if ((e > f) && (e > d)) {

    console.log("Number " + e + " is largest among three numbers")
} else {
    console.log("Number " + f + " is largest among three numbers")
}

//Problem:5
let score = 55;

if (score < 50) {
    console.log("Grade:F");
}
else if ((score >= 50) && (score < 70)) {
    console.log("Grade:D");
}
else if ((score >= 70) && (score < 80)) {
    console.log("Grade:C");
}
else if ((score >= 80) && (score < 90)) {
    console.log("Grade:B");
}
else if ((score >= 90) && (score <= 100)) {
    console.log("Grade:A");
}
