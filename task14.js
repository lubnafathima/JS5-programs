// Calculate the sum of even numbers from 2 to 20 using a for loop.

let evenSum = 0;

for (let i=1; i<=20; i++) {
    if (i%2 == 0) {
        evenSum += i;
    }
}

console.log(evenSum);