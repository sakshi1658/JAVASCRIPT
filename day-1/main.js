//Log a statemnet using console.log()
console.log("Hello from main.js");

// Variables Let & Const
let age = 22;
age = 23; // Can Reassign value
console.log(age);

const salary = 35000;
// Can't reassign value salary = 40000
console.log(salary);

//  Datatypes
let x = 10;
console.log(x);

const username = "Sakshi Sharma";
console.log(username);

let isUsername = true;

let person = null;

let y;

let user = { name: "Sakshi", age: 22 };
user.name = "Nurul";
user.age = 24;
console.log(user);

// QUESTIONS

// Declare three variables a, b, and c in a single line. Assign them values 5, 10, and 15 respectively.

let a = 1,
  b = 2,
  c = 3;

// Declare a variable x and assign it the value 10. Then, change its value to 20.

let g = 10;
g = 20;
console.log(g);

// Declare a variable isAvailable and assign it a boolean value indicating whether a product is available.

let isAvailable = true;
console.log(isAvailable);

//Create an object person with properties name, age, and city. Assign appropriate values to each property.

let student = { name: "Sakshi Sharma", age: 22, city: "Banglore" };

// Add a new property email to the person object created in the previous question.
student.email = "sharmasakshi1658@gmail.com";
console.log(student);

// Access the name property of the person object and assign it to a new variable personName.
const personName = student.name;
console.log(personName);

// Convert the string '123' into a number and store it in a variable num.
let string = "123";
let num = 123;
console.log(num);
console.log(typeof num);
console.log(typeof string);

// Declare a variable greeting and assign it the value 'Hello, World!'. Extract the substring 'World' from it.
let greeting = "Hello, World";
let substring = greeting.slice(7, 12); // Using slice method
console.log(substring);

// Create a variable fullName and assign it the value 'John Doe'. Convert it to uppercase?
let fullName = "John Doe";
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);
