/*string reverse using built-in-methods */
const reversed = str => str.split('').reverse().join('');
console.log(reversed('hello'));
/*Palindrome*/
const isPalindrome = str => str === str.split('').reverse().join('');
/*or*/

const isPalindrome1 = str => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};
console.log(isPalindrome("racecar")); 
console.log(isPalindrome1("hello"));   
/* counting vowels*/
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log(countVowels("hello"));     
console.log(countVowels("HELLO"));      
console.log(countVowels("sky"));  
/* capitalize first letter in word*/
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalize("hello")); 
console.log(capitalize("world")); 
/* or*/
const capitalizeWords = str =>
  str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizeWords("hello world"));         
console.log(capitalizeWords("good morning sunshine")); 
/* Find longest word in sentence*/
const findLongestWord = str => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest);
console.log(findLongestWord("I Read JavaScript"));
/*Repeat a String N times*/
const repeatString = (str, n) => str.repeat(n);
/*OR*/
const repeatString1 = (str, n) => n > 0 ? str.repeat(n) : '';
console.log(repeatString("hai", 3));
console.log(repeatString1("hello", 3));
/*Truncate a String*/
const truncateString = (str, num) => str.length > num ? str.slice(0, num) + '...' : str;
console.log(truncateString("Hello, world!", 5));
console.log(truncateString("Hi", 5));           
/*check string ends with a target*/
const endsWithTarget = (str, target) => str.endsWith(target);
console.log(endsWithTarget("Hello world", "world", ));
/*Replace all occurrences of a word in a string*/
const replaceAll = (str, target, replacement) => str.replaceAll(target, replacement);
console.log(replaceAll("cat dog cat", "cat", "fox")); 
/*check if two strings are Anagrams*/
const areAnagrams = (str1, str2) =>
  str1.toLowerCase().split('').sort().join('') ===
  str2.toLowerCase().split('').sort().join('');
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));   















