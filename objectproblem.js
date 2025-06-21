//Problem:1
let person = {name:"vidhya",age:24,city:"Salem"};
console.log(person.name);
console.log(person.age);
console.log(person.city);

//Problem:2
let book={title:"Javascript",author:"Mark Otto"};
book.year=1995;
delete book.author;
console.log(book);

//Problem:3
const calculator = {
  a: 10,
  b: 5,
  sum() {
    return this.a + this.b;
  }
};

console.log(calculator.sum()); // Output: 15

//Problem:4
let marks = {
  Math: 85,
  Science: 90,
  English: 78
};

for (let subject in marks) {
  console.log(subject + ": " + marks[subject]);
}

//Problem:5
let user = {
  name: "Ravi",
  age: 30,
  address: {
    city: "Bangalore",
    zip: 560001
  },
  hobbies: ["Reading", "Coding", "Travel"]
};

console.log(user.address.city);   // Bangalore
console.log(user.hobbies[0]);     // Reading


