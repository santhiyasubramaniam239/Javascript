// Problem:1
let name1 = "Kavitha";
let age = 15;
const isStudent = false;
console.log(name1);
console.log(age);
console.log(isStudent);
if (isStudent) {
    console.log("Eligible to get student Id card");
}
else {
    console.log("not eligible to get student Id card");
}

//Problem:2
let count = 5;
count += 10;
console.log(count);

//problem:3
function display() {
    let gesture = "hai";
    console.log(gesture);
}
display()
gesture = "welcome";
console.log(gesture);

//problem:4

//a = 15; shows ReferenceError: Cannot access 'a' before initialization
b = 16;
//console.log(typeof (a)); shows ReferenceError: Cannot access 'a' before initialization
console.log(typeof (b));
let a = "hello";
var b = "how are you?";
console.log(typeof (a));
console.log(typeof (b));

//problem:5
const user = { name: "kavya", age: 22 };
console.log(user);
user.name = "Sumithra";
user.age = 27;
console.log(user);
//const user = { name: "Pavithra", age: 24 } shows SyntaxError: Identifier 'user' has already been declared
