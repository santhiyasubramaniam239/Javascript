/* string reverse using built-in-methods */
const reversed = str => str.split('').reverse().join('');
console.log(reversed('hello'));

/* string reverse using iteration*/
function reverseString1(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString1("World"));
/* string reverse using array manipulation without .reverse()*/
function reverseString2(str) {
    let charArray = [];

    // Push characters into array manually
    for (let i = 0; i < str.length; i++) {
        charArray[i] = str[i];
    }

    // Manually reverse the array (in-place)
    let start = 0;
    let end = charArray.length - 1;
    while (start < end) {
        // Swap characters
        let temp = charArray[start];
        charArray[start] = charArray[end];
        charArray[end] = temp;

        start++;
        end--;
    }

    // Reconstruct string from array
    let reversedStr = '';
    for (let i = 0; i < charArray.length; i++) {
        reversedStr += charArray[i];
    }

    return reversedStr;
}
console.log(reverseString2("Good Bye"));
/* Reversing string using recursion*/
function reverseString3(str) {
    if (str === '') return '';
    return reverseString3(str.substr(1)) + str[0];
}
console.log(reverseString3("Good Night"));
/*ES6 Spread operator*/
const reverseString4 = str => [...str].reverse().join('');
console.log(reverseString4("Good Morning"));
/*Using while loop*/
function reverseString5(str) {
    let reversed = '';
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
    return reversed;
}
console.log(reverseString5("Good Evening"));
/*Using stack Array push and pop*/
function reverseString6(str) {
    let stack = [];
    for (let char of str) {
        stack.push(char);
    }

    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}
console.log(reverseString6("Good Day"));
/*Using Reduce*/
const reverseString7 = str =>
    str.split('').reduce((reversed, char) => char + reversed, '');
console.log(reverseString7("Evening Snack"));








