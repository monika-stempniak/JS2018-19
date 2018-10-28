// 6. Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.

const nums = [1,6,23,8,4,98,3,7,3,98,4,98];

let max = nums[0];
let maxIndexes = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num > max) {
    max = num;
  }
}

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num === max) {
    maxIndexes.push(i);
  }
}

console.log("The highest value is " + max + " and it's indexes are " + maxIndexes);
