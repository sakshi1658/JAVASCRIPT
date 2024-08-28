// Syntax

function name(parameter1, parameter2, parameter13) {
  // code
}

function greet(username) {
  console.log("Good Night " + username);
}

greet("Sakshi");
greet("Nurul");

function add(a, b) {
  return a + b;
}
const sum = add(25, 25);
console.log(sum);

// this is fat arrow function which  is used to define a function in a single line
const arrowSum = (c, d) => {
  return c + d;
};
const result = arrowSum(1, 25);
console.log(result);

// Scope
// -local

if (true) {
  const myName = "Sakshi";
  console.log(myName);
}

// function scope

function testFn(){
    const myName ="Sakshi SHarma"
    console.log(myName)
}


