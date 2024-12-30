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
