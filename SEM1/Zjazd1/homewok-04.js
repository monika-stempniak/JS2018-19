// 4. Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

const nums = [1,6,23,8,4,98,3,7,3,98,4,98];

let max = nums[0];
let min = nums[0];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log("MAX: " + max, "MIN: " + min);
 