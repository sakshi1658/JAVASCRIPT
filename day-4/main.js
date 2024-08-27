const num = -5;

if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// else-if  statement

const number = -5;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// switch  statement

const color = "red";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "green":
    console.log("Color is green");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Not a valid color"); // default case return  a message if the color is not in the cases
}

// For loop syntax
// for loop  is used to execute a block of code repeatedly for a specified number of times.

for (intialiazer; condition; final - expression) {
  // code to be executed
}

for (let i = 1; i <= 5; i++) {
  console.log("Iteration Number" + i);
}

// while loop syntax
//  while loop will execute  as long as the condition is true

intializer;
while (condition) {
  //  code to be executed

  final - expression;
}

let s = 1;
while (s <= 5) {
  console.log("Iteration Number" + s);
}

// do while  loop syntax
// do while loop  will execute the code at least once before checking the condition

intialiazer;
do {
  // code to be executed
  final - expression;
} while (condition);

let n = 1;
do {
  console.log("Iteration Number" + n);
  i++;
} while (n <= 5);

// for..of  loop syntax
// for..of loop is used to iterate over iterable objects such as arrays, strings, and sets

for (const item of array) {
  // code to be executed
}


const numArray = [ 1, 2, 3, 4, 5];
for  (const num of numArray) {
  console.log('Iteration number' + num);
}
