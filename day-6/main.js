/******************************************* Exercise 1:  *****************************************/

//  #1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log("Number print " + i);
}

// #2: Print the odd numbers less than 100

for (let j = 1; j <= 100; j += 2) {
  console.log("Odd number print " + j);
}

/* second way */
for (let k = 1; k <= 100; k++) {
  if (k % 2 !== 0) {
    console.log(k + " is odd");
  }
}

// #3: Print the multiplication table with 7
for (g = 1; g <= 10; g++) {
  let row = "7 * " + g + " = " + 7 * g;
  console.log(row);
}

// #4: Print all the multiplication tables with numbers from 1 to 10
for (var h = 1; h <= 10; h++) {
    printTable(h);
    console.log("");
  }
  
  function printTable(n) {
    for (var h = 1; h <= 10; h++) {
      var tables = n + " * " + h + " = " + (n * h); 
      console.log(tables);
    }
  }
  