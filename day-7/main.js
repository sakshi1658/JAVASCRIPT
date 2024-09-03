// #1.  Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
let myAge = 22;
let yourAge = 24;
console.log(myAge, yourAge); // Output: 22 24

// #2. Declare variables to store your first name, last name, marital status, country and age in a single line.
let information = {
  firstName: "Sakshi",
  lastName: "Sharma",
  maritalStatus: " SIngle",
  country: "India",
  age: 22,
};
console.log(information);

// #3. Print the length of the string on the browser console using console.log().
const str = "Hello, World!";
console.log(str.length); // Output: 13

// #4. Change all the string characters to capital letters using toUpperCase() method.
const strng = "Hello, World!";
console.log(strng.toUpperCase()); // Output: HELLO, WORLD!

// #5.  Change all the string characters to lower case letters using toLowerCase() method.
const string = "SakshI SharMa";
console.log(string.toLowerCase()); 

// #6. Cut (slice) out the first word of the string using substr() or substring() method.
// It takes two arguments, the starting index and number of characters to slice.
 const strng1 = "Hello, World!";
 console.log(strng1.substring(0, 5)); // Output: Hello

//  #7. Cut (slice) out the first word of the string using substr() or substring() method.
// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
const string2 = "FishFry";
console.log(string2.substring(0,3));  // Output: Fish



