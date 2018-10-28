// 7. Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

const nums = [1,6,23,8,4,98,3,7,3,98,4,98];

let sumOfEven = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 2 === 0) {
    sumOfEven = sumOfEven + num;
  }
}

const avg = sumOfEven / 2;

console.log("avg: " + avg);
