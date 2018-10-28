// 8. Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

const nums = [1,6,23,8,4,98,3,7,3,98,4,98];

let sumOfEven = 0;

for (let i = 1; i < nums.length; i++) {
  const num = nums[i];
  if (i % 2 === 0) {
    sumOfEven = sumOfEven + num;
  }
}

const avg = sumOfEven / 2;

console.log("avg: " + avg);
