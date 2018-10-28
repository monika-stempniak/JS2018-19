// 2. Calculate factorial of 7.

const num = 7;
let i = 1;
let factorial = 1;

while(i <= num) {
  factorial = factorial * i;
  i++;
}

console.log(num + "! is " + factorial);
