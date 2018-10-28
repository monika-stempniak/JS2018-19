// 3. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

const nums = [1,6,23,8,4,98,3,7,3,98,4,98];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 !== 0) {
    sum = sum + num;
  }
}

console.log("The sum of the odd items is: " + sum);
