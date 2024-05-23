// Calculate the factorial of a given number using a do-while loop.

let factorial = 3;
let factorialResult = 1;
let i = 1;

if (factorial < 0) {
  factorialResult = "Enter positive number";
} else {
  do {
    factorialResult *= i;
    i++;
  } while (i <= factorial);
}

console.log(factorialResult);