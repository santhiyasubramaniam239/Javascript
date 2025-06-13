/*Check if an object is empty*/
const obj = {};         
const obj2 = { a: 1 };  
if(Object.keys(obj).length === 0){
    console.log("object is empty");
}
if(Object.keys(obj2).length!=0){
     console.log("object has values:",obj2);
}
/* count occurrences of each element in an array*/
const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(count);
/*convert an object to an Array of key-value pairs*/
const obj1 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj1);
console.log(entries);
/*custom bind() function*/
const obj3 = { x: 42 };
function printX(y) {
  console.log(this.x + y);
}

const bound = printX.bind(obj3, 8);
bound();
/*Deep clone an object(No JSON methods)*/
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}
const original = {
  name: "Alice",
  details: {
    age: 25,
    hobbies: ["reading", "gaming"]
  }
};

const copy = deepClone(original);
copy.details.age = 30;
console.log(copy.details.age); 
console.log(original.details.age); 
/*Transform data*/
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 }
];
const result = users
  .filter(user => user.age >= 18)                  // Step 1
  .map(user => user.name)                          // Step 2
  .reduce((acc, name) => {                         // Step 3
    acc.count += 1;
    acc.names.push(name);
    return acc;
  }, { count: 0, names: [] });
console.log(result);
/*debounce*/
// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Function to be debounced
function search(query) {
    console.log('Searching for:', query);
}

// Create a debounced version of the search function
const dSearch = debounce(search, 100);

// Simulate typing with multiple calls to the debounced function
dSearch('Hello');
dSearch('Hello, ');
dSearch('Hello, World!');  // Only this call will trigger after 100ms



