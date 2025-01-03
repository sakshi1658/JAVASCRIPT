function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// <!-- Reverse a String -->
function reverse(word) {
  return word.split("").reverse().join("");
}
console.log(reverse("sakshi"));

// Find the Largest Number in an Array
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const numbers = [3, 6, 54, 21, 1243, 232];
console.log(findLargest(numbers));

//  Check for Palindrome
function isPalindrome(num) {
  let numStr = num.toString();
  let result = numStr.split("").reverse().join("");
  return numStr === result;
}
console.log(isPalindrome(121));
console.log(isPalindrome(3132));
console.log(isPalindrome("madam"));

// Find the Intersection of Two Arrays
function Intersection(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
const array1 = [2, 9, 8, 7, 6];
const array2 = [3, 8, 9, 0];
console.log(Intersection(array1, array2));

// Find the Largest Number in an Array
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const number = [5, 8, 9, 87];
console.log(findLargest(number));

// Find the Missing Number
function findMissing(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - actualSum;
}
const num = [1, 2, 4, 5, 6];
const n = 6;
console.log(findMissing(num, n));

//  Sum of Odd Numbers in an Array
function sumOfOdds(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const add = [1, 2, 3, 4, 5, 6, 7];
console.log(sumOfOdds(add)); // Output: 16
