let name1 = "JS";
console.log(name1);
const a =25;
/* a=56;*/ //shows type error because it's type is const
console.log(a);
var city1 = "Chennai";
console.log(city1);
let passed = true;
console.log(passed);
let empty = null;
console.log(empty);
let x;
console.log(x);
let score = 99.5;
console.log(score);
let user = {name:"Savitha", age:25};
console.log(user);
let user1="Alvernia";
user1 ="kavitha";
let age=30;
console.log(user1,age);
let fruits=["apple","banana"];
console.log(fruits);
function greet(){
    console.log("Hi");
}
let city = "Mumbai";
const country = "India";
let year;
year=2025;
console.log(city , country , year);
const sym1= Symbol("value");
const sym2= Symbol("value");
console.log(sym1 === sym2);
const id = Symbol("userId");
let user2={ name2:"Sahi",[id]:101,};
console.log(user2.name2);
console.log(user2[id]);
console.log(user2);
console.log(user.id);
for(let i=1; i<=3;i++){
    let message = "Assignment" + i;
    console.log(message);
}
let obj ={
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
    }
};
for (let val of obj){
   console.log(val); 
}

