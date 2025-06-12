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
/*var creatures = [
    { name: "Shark", habitat: "Ocean" },
    { name: "Whale", habitat: "Ocean" },
    { name: "Lion", habitat: "Savanna" },
    { name: "Monkey", habitat: "Jungle" },
];
const aquaticCreatures = creatures.filter((creature) => { return creature.habitat == 'Ocean'; })
console.log(aquaticCreatures);*/
/*let person={
    firstName:"Logesh",lastName:"Jayagopi",age:27,isStudent:true};
console.log(person.firstName)
    person.firstName = "John";
    person.lastName = "Doe";
    delete person.isStudent;
    console.log(person)
     console.log("firstName" in person)
     console.log("fullName" in person)*/
    /* const session = {id:1,time:'26-July-2018',device:'mobile',browser:'chrome'};
     const values = Object.values(session);
     console.log(values)*/
     /* const employees= {boss:'Michael',secretary:'Pam',sales:'Jim',accountant:'Oscar'};
     const keys = Object.keys(employees);
     console.log(keys)*/
    /* const obj= {name:'Adam',age:20,location:'Nepal'};
     const keys = Object.entries(obj);
     console.log(keys)*/
    /* const obj= {42:'a',22:'b',71:'c'};
     const keys = Object.entries(obj);
     console.log(keys)*/
    /* function createCharacter(name){
    return{
        name,greet: function (){
       console.log(this.name+' says hello!');
    },
}
}
const character = createCharacter('Logesh');
character.greet();*/
/*function Character(name){
    this.name = name}
    const character = new Character('Logesh');
console.log(character)*/
/*const character = {
  attack: function () {
    console.log('Swing!')
  },
}
const fighter = {name:'Hulk', __proto__ : character}
 console.log ( fighter.attack())*/
/*function character(name)  {
  this.name = name;
 this.attack= function () {
    console.log(this.name+' Swings!');
  }
}
function Fighter(name){
  this.name = name;
}
Fighter.prototype = new character();
const fighter = new Fighter('Hulk');
 fighter.attack()*/
 /*class character{
  constructor(name){
  this.name = name;}
 attack() {
    console.log(this.name+' Swings!');
  }
}
class Fighter extends character{
  constructor(name){
    super(name)
  }
}
const fighter = new Fighter('Hulk');
 fighter.attack()*/
 /*let decoration = {
  color:'red',
  radius:10
 };
 for(const prop in decoration){
  console.log(prop)
 }*/
/*let decoration = {
  color:'red',
  radius:10
 };
console.log( decoration['color']);*/
/*let decoration = {
  color:'red',
  radius:10
 };
 for(const prop in decoration){
  console.log(decoration[prop]);
 }*/
/*const arr =['hello',1,'Javascript',true];
for(let x in arr){
  console.log(x)
  console.log(arr[x])
}*/
/*try{
  let result = add(10,20);
  console.log(result)
}catch(e){
  console.log({name:e.name,message:e.message})
}
console.log('Bye')*/
/*function add(a,b){
  return a*b;
}
try{
  let result = add(10,20);
  console.log(result)
}catch(e){
  console.log({name:e.name,message:e.message})
}
console.log('Bye')*/
/*let result = 0;
try{
  result = add(10,20);
  console.log(result)
}catch(e){
  console.log({name:e.name,message:e.message})
}finally{
  console.log({result})
}
console.log('Bye')*/
/*let result = 0;
function add(a,b){
  return a*b;
}
try{
  result = add(10,20);
  console.log(result)
}catch(e){
  console.log({name:e.name,message:e.message})
}finally{
  console.log({result})
}
console.log('Bye')*/
/*function getUsers(){
  return[{username:'john',email:'john@test.com'},
    {username:'jane', email:'jane@test.com'},];
}
function findUser(username){
  const users = getUsers();
  const user = users.find((user)=>user.username === username);
  return user;
}
console.log(findUser('john'))*/
/*function getUsers(){
  return new Promise((resolve,reject)=>{
    let users=[];
    setTimeout(() => {
     users = [
    {username:'john',email:'john@test.com'},
    {username:'jane', email:'jane@test.com'},];
    resolve(users);
     },1000);
     return users;
    })
}

  const promise = getUsers();
 promise.then((users)=>console.log(users))*/
 /*function getUsers(){
  return new Promise((resolve,reject)=>{
    let users=[];
    setTimeout(() => {
     users = [
    {username:'john',email:'john@test.com'},
    {username:'jane', email:'jane@test.com'},];
    resolve(users);
     },1000);
     return users;
    })
}
function findUser(username){
  getUsers().then((users) => {
  const user = users.find((user)=>user.username === username);
  console.log(user)
  })
}
  console.log(findUser('jane'))*/
  
 /* const promise =  new Promise((resolve,reject)=>{
    
    setTimeout(() => {
    let  user = 
    {name:'Logesh'};resolve('completed')},5000);
  });
 console.log(promise); 
 promise.then((result)=>{console.log('Result:',result)})*/
 const promise =  new Promise((resolve,reject)=>{
    setTimeout(() => { reject('We have failed')},2000);
   setTimeout(() => {  let  user = 
    {name:'Logesh'};resolve('completed')},5000);
  });
 /*console.log(promise); */
 promise.catch((reason)=>{console.log(reason)})
 /*Anonymous function*/
 const greet = function( str ) {
	console.log("Welcome to ", str);
};
    
greet("GeeksforGeeks!");
/* Relational operators*/
const obj = { length: 10 };
console.log("length" in obj);
console.log([] instanceof Array);
console.log(typeof(obj));

   

 

  
