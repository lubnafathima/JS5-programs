// Print all prime numbers up to 50 using loops.
let isPrimeNumber = true;
for (let num = 2; num <= 50; num++) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }

  if (isPrimeNumber) {
    console.log(num);
  }
} 