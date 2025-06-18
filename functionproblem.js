//Problem:1
function greet(name) {
    let name1 = name;
    console.log("Hi", name1);
}
greet("Ramya");

//Problem:2
function add(x, y) {
    let x1 = x;
    let y1 = y;
    return x1 + y1;
}
let sum = add(5, 3);
console.log(sum);

//Problem:3
function isPrime(num) {
    let num1 = num;
    if (num1 > 1) {
        if (num % 2 != 0) {
            if (num % 3 != 0) {
                return true;
            }

        }
    }
    return false;
}
let num = isPrime(13);
console.log(num);

//Problem:4
function factorial(num) {

    let num2 = num;
    if (num2 === 1) {
        return 1;
    }
    let result1 = 1;
    for (let i = 2; i <= num2; i++) {
        result1 = result1 * i;

    }
    return result1;
}
let fact1 = factorial(9);
console.log(fact1);

//Problem:5
function calculate(a, b) {
    let a1 = a;
    let b1 = b;
    return a1 * b1;
}
let cal1 = calculate(9, calculate(3, 2));
console.log(cal1);