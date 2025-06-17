//Problem:1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Problem:2
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

//Problem:3
let n1 = 7;
for (let i = 1; i <= 10; i++) {
    let result = i * n1;
    console.log(i + " * " + n1 + "= " + result);
}

//Problem:4
let number1 = 1234;
let str = number1.toString();
let result1 = [];
result1 = str.split('');
let j = result1.length;
let str2;

for (let i = j; i >= 0; i--) {

    str2 += result1[i];

}
let str3 = str2.toString();
let str4 = Number(str3.match(/\d+/)?.[0]);
console.log(str4);

//Problem:5
let n2 = 5;
let star = "*";
for (let i = 0; i <= n2 + 1; i++) {
    for (let j = 1; j < i; j++) {
        process.stdout.write(star + " ");
    }
    process.stdout.write("\n");
}




