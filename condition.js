let age = 20;
if(age >= 18){
    console.log("You can vote");
}
age = 16;
if(age >=18){
    console.log("Adult");
}else{
    console.log("Minor");
}
let marks = 85;
if(marks>=90){
    console.log("Grade A");
}else if(marks >= 75){
    console.log("Grade B");
}else{
    console.log("Grade C");
}
age = 19;
let result = (age >= 18)? "Adult":"Minor";
console.log(result);
let fruit = "banana";
switch(fruit){
    case "apple":
        console.log("Apples are ₹100/kg");
        break;
    case "banana":
        console.log("Bananas are ₹40/kg");
        break;
    default:
        console.log("Fruit not available");        
}
//Login system check:
let isLoggedIn = true;
if(isLoggedIn){
    console.log("Welcome back!");
} else{
    console.log("Please login. ");
}
//E-commerce cart offer:
let total = 750;
if(total > 1000){
    console.log("You get a 20% discount");
}else if (total >500){
    
}

