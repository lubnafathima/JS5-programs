// Calculate the factorial of a given number using a for loop.
let number = 5;
let result = 1;

if (number === 0 || number === 1) {
  result = 1;
} else {
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
}

console.log(result);