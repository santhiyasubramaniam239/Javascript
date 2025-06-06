/*var a=10
var b=30
console.log(a+b)*/
/*console.log('Hello world')*/
/*const name = 'Hai'
function Hai(){
    console.log(name)
}
console.log(name)
Hai()*/
/*const name = 'Logesh, from JVLcode'
function logTrueName(){
    const name = 'Spiderman, from Marvel'
    if (true){
        const name='Superman, from DC'
        console.log(name)
    }
    console.log(name)
    }
    console.log(name)
    logTrueName()*/
/*function logname(){
 if (true){
     var name ='Logesh, from JVL code'

 }
 console.log(name)
} 
logname()*/
/* function logname(){
  if (false){
      var name ='Logesh, from JVL code'

  }
  console.log(name)
 } 
 logname()*/
/*function codehoist(){
 a=10;
 let b=50;
}
codehoist();
console.log(a);
console.log(b);*/
/*const person = {name :"logesh",age :14}
person.name = "Ram";
console.log(person)*/
/*const cars=['BMW','Mercedes'];
cars.push('Maruti')
console.log(cars)*/
/*const age=29;
age=15;*/
/* 42 + '0'*/
/*const a = 42
const b='JVL code'
const c=null
a||b
c||b
a&&b
a&&c*/
/*function greet(name){
  console.log('Hello' +'',name+'!',)
}
greet('Logesh')*/
/*let result;
if(result == undefined){
  result = 'Hello';
}
result*/
/*let result = null;
result = result ??'Hello'
result*/
/* let result = "Jvlcode";
 result = result ??'Hello'
 result*/
/*function sayHello(){
  console.log("Hello")
}
sayHello()*/
/*  function sayHello(message){
   console.log(message)
 }
 sayHello("Hello JVLcode")*/
/* function sayHello(message){
   console.log(message)
 }
let result= sayHello("Hello JVLcode");
console.log('Result:',result)*/
/*function add(a,b){
   return a+b;
}
 let result = add(1,2);
 console.log(result)*/
/*function add(a,b){
  if(a&&b){
      return a+b;
  }
  return 0;
}
add(3,2);*/
/*function outer(){
    var b =10;
    function inner(){
        var a=20;
        console.log(a+b);
    }
    return inner;
}
let somefn = outer();
somefn();*/
/*let colors = new Array('red','blue','green');

console.log(colors[0])
   colors[1] = "Yellow";
   console.log(colors)
   console.log(colors.length)
 if(colors.length>0){
    console.log("We have colors")
 }*/
/* colors = [];
 if(colors.length>0){
    console.log("We have colors")
    console.log(colors.length)
 }
 colors.length*/
/*let colors = ['red','blue','green'];
colors.push("Yellow")
colors.unshift("pink")
colors.pop();
colors.shift();
console.log(colors)
console.log(colors.indexOf ('green'))*/
/*const products = ['beans','pizza','chicken','salmon'];
console.log(products.map((el) => {return el+' *';}))
const productsMapped = products.map((el) => {return el+' *';})
productsMapped.forEach((el)=>{console.log(el)})*/
/*const prices = [2,5,7,16,50,38];
const discountAmount = 1;
const discountPrices = prices.map((price) => {return price- discountAmount;})
console.log(discountPrices);*/
/*const numbers = [1,3,6,8,11];
var greaterThanSeven = numbers.filter((number) => {return number > 7 ;})
console.log(greaterThanSeven);*/
var creatures = [
    { name: "Shark", habitat: "Ocean" },
    { name: "Whale", habitat: "Ocean" },
    { name: "Lion", habitat: "Savanna" },
    { name: "Monkey", habitat: "Jungle" },
];
const aquaticCreatures = creatures.filter((creature) => { return creature.habitat == 'Ocean'; })
console.log(aquaticCreatures);

