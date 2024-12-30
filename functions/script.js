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
function isPalindrome(num){
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}
console.log(isPalindrome(121));
console.log(isPalindrome(3132));
console.log(isPalindrome('madam'));