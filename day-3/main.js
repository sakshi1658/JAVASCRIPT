console.log(2 + "3")
console.log(true + '30')

console.log('4' - '2')
console.log('7' * '9') //this is type  coercion, it converts the string to a number and then performs the operation

console.log('Sakshi' - 'Sharma') // returns  NaN because it can't convert the string to a number
console.log('5' - null) // returns null  because null is not a number


// some built in methods in javascript

console.log(Number('30'))  // converts the string to a number
console.log(Number()) 
console.log(parseInt('5')) //  converts the string to an integer
console.log(parseFloat('5.5')) // converts the string to a float
console.log(String(500)) //  converts the number to a string
console.log((500).toString()) //  converts the number to a string

console.log(Boolean(10)) //  returns true because 10 is a number and numbers are truthy
console.log(Boolean(0)) // null, undefined, 0, Nan,  empty string'' , empty array, empty object are falsy


// Equality

const var1 = 'test'
const var2 = 'test'

console.log(var1 == var2) //  returns true because the values are equal

console.log(var1 === var2)  //  this is strict equality, it checks the type as well as the value

const var3 =  10
const var4 = '10'

console.log(var3 == var4) //  returns true because the values are equal & it allows  type coercion means  it converts the string to a number and then compares the values automatically 

console.log(var3 === var4) //   returns false because the types are different &  it doesn't allow type coercion 











