//Problem:1
function greet(name){
    let name1=name;
 console.log("Hi", name1);
}
greet("Ramya");

//Problem:2
function add(x,y){
    let x1=x;
    let y1=y;
 return x1+y1;
}
let sum = add(5,3);
console.log(sum);

//Problem:3
function isPrime(num){
    let num1=num;
    if(num1>1){
       if(num%2!=0){
        if(num%3!=0){
            return true;
        }
       
       }
    }
  return false; 
}
let num = isPrime(13);
console.log(num);

