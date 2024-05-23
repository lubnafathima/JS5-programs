// Write a for loop to print numbers from 1 to 10, but skip odd numbers using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
