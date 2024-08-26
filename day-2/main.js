let x = 20,
  y = 10;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);
console.log(++x);
console.log(--y);

console.log(x == y);
console.log(x != y); // Not equal to y
console.log(x === y); // Equal to y also check  data type
console.log(x !== y); // check strictly Not equal to y also check data type
console.log(x >= y);
console.log(x <= y);

const isValidNumber = x > 10 && 20 > y; //&& check, it is a logical AND operator that returns true if both conditions are true, and false
console.log(isValidNumber);

const isValid = x > 30 || y > 5; //|| check, it is a logical OR operator that returns true if at  least one condition is true, and false if both conditions are false
console.log(isValid);

// ternary operator 
// It's a shorthand for an if-else statement that can be used to assign a value to a variable or return a value from a function.
const isEven = 10 % 2 === 0 ? 'Even' : 'Odd';
console.log(isEven)


// Questions

//  Swap Two Variables.
function swap (a,b) {
    return [b,a];
    }
console.log(swap(1,2))
